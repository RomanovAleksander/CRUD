import {useState, useCallback, useEffect} from 'react';
import {useHttp} from './http.hook';
import { useDispatch } from "react-redux";

const storageName = 'userData';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const {request, loading} = useHttp();
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setIsAdmin(null);
    localStorage.removeItem(storageName);
  }, []);

  const login = useCallback(async (jwtToken) => {
    try {
      const data = await request('/api/auth/token', 'GET', null, {
        Authorization: `Bearer ${jwtToken}`
      });

      setToken(jwtToken);
      setUserId(data.decoded.userId);
      setIsAdmin(data.decoded.isAdmin);
      dispatch({ type: "SET_USERNAME", payload: { username: data.username }});

      localStorage.setItem(storageName, JSON.stringify({
        token: jwtToken
      }));
    } catch (e) {
      console.log(e.message);
      logout();
    }
  }, [request, logout, dispatch]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token);
    }
    setReady(true);
  }, [login])

  return { login, logout, token, userId, isAdmin, loading, ready };
}

export default useAuth;
