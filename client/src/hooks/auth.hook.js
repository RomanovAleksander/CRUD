import {useState, useCallback, useEffect} from 'react';
import {useHttp} from './http.hook';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const {request, loading} = useHttp();

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
      console.log(data)

      setToken(jwtToken);
      setUserId(data.userId);
      setIsAdmin(data.isAdmin);

      localStorage.setItem(storageName, JSON.stringify({
        token: jwtToken
      }));
    } catch (e) {
      console.log(e.message);
      logout();
    }
  }, [request, logout]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token);
    }
    setReady(true);
  }, [login])

  return { login, logout, token, userId, isAdmin, loading, ready };
}
