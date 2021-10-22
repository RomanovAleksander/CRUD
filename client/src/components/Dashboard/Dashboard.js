// import React, {useCallback, useEffect, useState} from 'react';
// import {useHttp} from "../../hooks/http.hook";
// import {Loader} from "../Loader/Loader";
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  // const {request, loading} = useHttp();
  // const [usersDara, setUsersData] = useState([]);
  //
  // const fetchData = useCallback(async () => {
  //   try {
  //     const data = await request('/api/auth/', 'GET');
  //     setUsersData(data);
  //   } catch (e) {}
  // }, [request])
  //
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData])
  //
  // if (loading) {
  //   return <Loader />
  // }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Dashboard:</div>
        <div className={styles.dashboard}>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Users:</p>
            <p className={styles.count}>13</p>
          </div>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Profiles:</p>
            <p className={styles.count}>27</p>
          </div>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Profiles over 18 years old:</p>
            <p className={styles.count}>20</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
