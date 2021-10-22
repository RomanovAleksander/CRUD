import {useState, useCallback, useEffect} from 'react';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  const login = useCallback((jwtToken, id, isAdm) => {
    setToken(jwtToken);
    setUserId(id);
    setIsAdmin(isAdm);

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, isAdmin: isAdm
    }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setIsAdmin(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId, data.isAdmin);
    }
    setReady(true);
  }, [login])

  return { login, logout, token, userId, isAdmin, ready };
}
