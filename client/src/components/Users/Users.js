import React, {useCallback, useContext, useEffect, useState} from 'react';
import styles from './Users.module.scss';
import {useHttp} from "../../hooks/http.hook";
import {Loader} from "../Loader/Loader";
import {AuthContext} from "../../context/AuthContext";

const Users = () => {
  const {request, loading} = useHttp();
  const [users, setUsers] = useState([]);
  const {token} = useContext(AuthContext);

  const fetchUsers = useCallback(async () => {
    try {
        const data = await request('/api/auth/', 'GET', null, {
          Authorization: `Bearer ${token}`
        });
        setUsers(data);
      console.log(data)
    } catch (e) {}
  }, [request, token])

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Users:</div>
        <div className={styles.contentWrapper}>
          {users.map((user) => {
            return (
              <div className={styles.user} key={user._id}>
                <p className={styles.title}>{user.username}</p>
                <p className={styles.email}>{user.email}</p>
                <p className={styles.profiles}>{user.profiles.length}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Users;
