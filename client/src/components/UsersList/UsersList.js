import styles from "../Users/Users.module.scss";
import React from "react";
import {Link} from "react-router-dom";

export const UsersList = ({ users }) => {
  return (
    users.map((user) => {
        return (
          <Link to={`/user/${user._id}`} key={user._id}>
            <div className={styles.user}>
              <p className={styles.title}>{user.username}</p>
              <p className={styles.email}>{user.email}</p>
              <p className={styles.profiles}>{user.profiles.length}</p>
            </div>
          </Link>
        )
      })
  )
}