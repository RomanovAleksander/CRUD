// import React, {useEffect} from 'react';
import styles from './Users.module.scss';
// import {useHttp} from "../../hooks/http.hook";

const Users = () => {
  // const {request} = useHttp();

  // const getUsers = async () => {
  //   try {
  //       const data = await request('/api/auth/', 'GET');
  //       console.log(data)
  //   } catch (e) {}
  // }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Users:</div>
        <div className={styles.contentWrapper}>
          <div className={styles.user}>
            <p className={styles.title}>1White</p>
            <p className={styles.email}>danilo.bilyi@gmail.com</p>
            <p className={styles.profiles}>3 profiles</p>
          </div>
          <div className={styles.user}>
            <p className={styles.title}>1White</p>
            <p className={styles.email}>mail@mail.com</p>
            <p className={styles.profiles}>1 profile</p>
          </div>
          <div className={styles.user}>
            <p className={styles.title}>1White</p>
            <p className={styles.email}>mail@mail.com</p>
            <p className={styles.profiles}>1 profile</p>
          </div>
          <div className={styles.user}>
            <p className={styles.title}>1White</p>
            <p className={styles.email}>mail@mail.com</p>
            <p className={styles.profiles}>1 profile</p>
          </div>
          <div className={styles.user}>
            <p className={styles.title}>1White</p>
            <p className={styles.email}>mail@mail.com</p>
            <p className={styles.profiles}>1 profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users;
