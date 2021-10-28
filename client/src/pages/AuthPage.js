import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {AuthContext} from '../context/AuthContext';
import {useHttp} from '../hooks/http.hook';
import LoginForm from '../components/LoginForm/LoginForm';

export const AuthPage = ({ isSignIn }) => {
  const defaultData = {
    username: '',
    email: '',
    password: '',
    isAdmin: false
  };
  const history = useHistory();
  const auth = useContext(AuthContext);
  const {loading, request, error, clearError} = useHttp();
  const [userData, setUserData] = useState(defaultData);

  useEffect(() => {
    showToast(error, 'error');
    clearError();
  }, [error, clearError])

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

  const handleChange = (event) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  }

  const handleCheck = (event) => {
    setUserData({ ...userData, isAdmin: event.target.checked });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!isSignIn) {
        const data = await request('/api/auth/register', 'POST', {...userData});
        showToast(data.message, 'success');
        history.push('/');
        setUserData({...defaultData});
      } else {
        const data = await request('/api/auth/login', 'POST', {
          email: userData.email,
          password: userData.password
        });
        auth.login(data.token);
      }
    } catch (e) {}
  }

  return (
    <LoginForm submitHandler={submitHandler}
               handleCheck={handleCheck}
               handleChange={handleChange}
               userData={userData}
               isSignIn={isSignIn}
               loading={loading}
    />
  )
}
