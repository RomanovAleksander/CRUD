import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../hooks/http.hook';
import {Loader} from '../components/Loader/Loader';
import Dashboard from '../components/Dashboard/Dashboard';

export const DashboardPage = () => {
  const {token} = useContext(AuthContext);
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
      <Dashboard users={users} profiles={profiles} />
    )
  } else {
    return <Loader />
  }
}
