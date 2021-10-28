import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Users.module.scss';

export const UsersList = ({ users }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Users:</div>
        <div className={styles.contentWrapper}>
          {
            users.map((user) => {
              return (
                <Link to={`/user/${user._id}`} key={user._id} className={styles.userWrapper}>
                  <div className={styles.user}>
                    <p className={styles.title}>{user.username}</p>
                    <p className={styles.email}>{user.email}</p>
                    <p className={styles.profiles}>{user.profiles.length}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
