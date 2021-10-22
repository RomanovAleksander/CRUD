import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from "../../hooks/http.hook";
import {Loader} from "../Loader/Loader";
import styles from './Dashboard.module.scss';
import {AuthContext} from "../../context/AuthContext";

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const {request, loading} = useHttp();
  const [users, setUsers] = useState([]);
  const [profiles, setProfiles] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const data = await request('/api/auth/', 'GET');
      setUsers(data);
    } catch (e) {}
  }, [request])

  const getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
      age--;
    }
    return age;
  }

  const getCount = (profiles) => {
    const res = [];

    profiles.forEach((profile) => {
      res.push(getAge(profile.birthdate));
    });

   return res.filter((item) => item >= 18).length;
  }

  const fetchProfiles = useCallback(async () => {
    try {
      const data = await request('/api/profile/all', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setProfiles(data);
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchUsers();
    fetchProfiles();
  }, [fetchUsers, fetchProfiles])

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Dashboard:</div>
        <div className={styles.dashboard}>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Users:</p>
            <p className={styles.count}>{users.length}</p>
          </div>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Profiles:</p>
            <p className={styles.count}>{profiles.length}</p>
          </div>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Profiles over 18 years old:</p>
            <p className={styles.count}>{getCount(profiles) || '0'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
