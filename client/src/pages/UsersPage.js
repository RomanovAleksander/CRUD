import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../hooks/http.hook';
import {Loader} from '../components/Loader/Loader';
import {UsersList} from '../components/UsersList/UsersList';

export const UsersPage = () => {
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

  if (loading || !users) {
    return <Loader />
  }

  return (
    <UsersList users={users}/>
  )
}
