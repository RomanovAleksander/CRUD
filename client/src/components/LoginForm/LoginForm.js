import React, {useContext, useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import styles from './LoginForm.module.scss';

const LoginForm = withRouter (({ isSignIn, history, ...props }) => {
  const defaultState = {
    username: '',
    email: '',
    password: '',
    isAdmin: false
  };
  const auth = useContext(AuthContext);
  const {loading, request, error, clearError} = useHttp();
  const [state, setState] = useState(defaultState);

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
    setState(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  }

  const handleCheck = (event) => {
    setState({ ...state, isAdmin: event.target.checked });
  }

  const submitHandler = async (e) => {
    const target = e.target.textContent;
    try {
      if (target === 'Sign Up') {
        const data = await request('/api/auth/register', 'POST', {...state});
        showToast(data.message, 'success');
        history.push('/');
      } else {
        const data = await request('/api/auth/login', 'POST', {
          email: state.email,
          password: state.password
        });
        auth.login(data.token, data.userId, data.isAdmin)
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
            <input type="username" name="username" onChange={handleChange}/>
          </label>
        )}
        <label>
          Email
          <input type="text" name="email" onChange={handleChange}/>
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleChange}/>
        </label>
        {!isSignIn && (
          <label className={styles.isAdmin}>
            <input type="checkbox" name="isAdmin"
                   checked={state.isAdmin}
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
});

export default LoginForm;