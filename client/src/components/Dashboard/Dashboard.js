import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from "../../hooks/http.hook";
import {Loader} from "../Loader/Loader";
import styles from './Dashboard.module.scss';
import {AuthContext} from "../../context/AuthContext";

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const {request, loading} = useHttp();
  const [users, setUsers] = useState(null);
  const [profiles, setProfiles] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      const data = await request('/api/user/', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setUsers(data);
    } catch (e) {}
  }, [request, token])

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

  if (users && profiles) {
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
              <p className={styles.count}>{profiles.profiles.length}</p>
            </div>
            <div className={styles.dashboardItem}>
              <p className={styles.title}>Profiles over 18 years old:</p>
              <p className={styles.count}>{profiles.adults}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <Loader />
  }
}

export default Dashboard;
