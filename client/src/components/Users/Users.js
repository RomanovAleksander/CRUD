import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useHttp} from '../../hooks/http.hook';
import {Loader} from '../Loader/Loader';
import {UsersList} from '../UsersList/UsersList';
import styles from './Users.module.scss';

const Users = () => {
  const {request, loading} = useHttp();
  const [users, setUsers] = useState([]);
  const {token} = useContext(AuthContext);

  const fetchUsers = useCallback(async () => {
    try {
        const data = await request('/api/user/', 'GET', null, {
          Authorization: `Bearer ${token}`
        });
        setUsers(data);
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
          <UsersList users={users} />
        </div>
      </div>
    </div>
  )
}

export default Users;
