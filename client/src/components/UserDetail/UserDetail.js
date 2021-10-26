import React, {useCallback, useContext, useEffect, useState} from 'react';
import styles from "./UserDetail.module.scss";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

export const UserDetail = () => {
  const {request, loading} = useHttp();
  const {token} = useContext(AuthContext);
  const userId = useParams().id;
  const auth = useContext(AuthContext);
  const [user, setUser] = useState({});

  const showToast = (message, type) => {
    toast[`${type}`](message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }

  const fetchUser = useCallback(async () => {
    try {
      const data = await request(`/api/user/${userId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setUser(data);
    } catch (e) {}
  }, [request, token])

  const fetchUserDelete = useCallback(async () => {
    try {
      const data = await request(`/api/user/delete`, 'DELETE', {userId: userId}, {
        Authorization: `Bearer ${token}`
      });
      if (data.id === userId) auth.logout();
      showToast(data.message, 'success');
    } catch (e) {}
  }, [request, token])

  useEffect(() => {
    fetchUser();
  }, [fetchUser])

  const handleDelete = () => {
    fetchUserDelete()
  }

  return (
    <div className={styles.container}>
      <ToastContainer />
      {!loading && (
        <div className={styles.wrapper}>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.isAdmin ? 'admin' : 'user'}</div>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button}>edit</button>
            <button className={styles.button} onClick={handleDelete}>delete</button>
          </div>
        </div>
      )}
    </div>
  )
}
