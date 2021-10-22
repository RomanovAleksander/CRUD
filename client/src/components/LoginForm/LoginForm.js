import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import styles from './LoginForm.module.scss';

const LoginForm =  ({ isSignIn }) => {
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
    const target = e.target.textContent;
    try {
      if (target === 'Sign Up') {
        const data = await request('/api/auth/register', 'POST', {...userData});
        showToast(data.message, 'success');
        history.push('/');
        setUserData({...defaultData});
      } else {
        const data = await request('/api/auth/login', 'POST', {
          email: userData.email,
          password: userData.password
        });
        auth.login(data.token, data.userId, data.isAdmin);
      }
    } catch (e) {}
  }

  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <div className={styles.title}>
        {isSignIn ? 'Sign in' : 'Create your account'}
      </div>
      <div className={styles.form}>
        {!isSignIn && (
          <label>
            Username
            <input type="username"
                   name="username"
                   onChange={handleChange}
                   value={userData.username}
            />
          </label>
        )}
        <label>
          Email
          <input type="text"
                 name="email"
                 onChange={handleChange}
                 value={userData.email}
          />
        </label>
        <label>
          Password
          <input type="password"
                 name="password"
                 onChange={handleChange}
                 value={userData.password}
          />
        </label>
        {!isSignIn && (
          <label className={styles.isAdmin}>
            <input type="checkbox" name="isAdmin"
                   checked={userData.isAdmin}
                   onChange={handleCheck}/>
            is admin
          </label>
        )}
        <div className={styles.buttonsWrapper}>
          <button className={styles.submitButton}
                  onClick={submitHandler}
                  disabled={loading}
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <span className={styles.divingLine} />
          <a href={`${!isSignIn ? '/' : '/signup'}`}>{!isSignIn ? 'Sign In' : 'Sign Up'}</a>
        </div>
      </div>
    </div>
  )
};

export default LoginForm;