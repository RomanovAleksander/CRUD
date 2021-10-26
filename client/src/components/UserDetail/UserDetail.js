import React, {useCallback, useContext, useEffect, useState} from 'react';
import styles from "./UserDetail.module.scss";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {useParams} from "react-router-dom";

export const UserDetail = () => {
  const {request, loading} = useHttp();
  const {token} = useContext(AuthContext);
  const userId = useParams().id;
  const [user, setUser] = useState({});

  const fetchUser = useCallback(async () => {
    try {
      const data = await request(`/api/user/${userId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setUser(data);
    } catch (e) {}
  }, [request, token])

  useEffect(() => {
    fetchUser();
  }, [fetchUser])

  return (
    <div className={styles.container}>
      {!loading && (
        <div className={styles.wrapper}>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.isAdmin ? 'admin' : 'user'}</div>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button}>edit</button>
            <button className={styles.button}>delete</button>
          </div>
        </div>
      )}
    </div>
  )
}
