import React, {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {useHttp} from "../../hooks/http.hook";
import 'react-toastify/dist/ReactToastify.css';
import './loginForm.css';

const LoginForm = ({ isSignIn }) => {
  const defaultState = {
    username: '',
    email: '',
    password: '',
    isAdmin: false
  };
  const {loading, request, error, clearError} = useHttp();
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    toast.error(error, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
    clearError();
  }, [error, clearError])

  const handleChange = (event) => {
    setState(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...state});
      toast.success(data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });

    } catch (e) {}
  }


  return (
    <div className="form-wrapper">
      <ToastContainer />
      <div className="form-title">
        {isSignIn ? 'Sign in' : 'Create your account'}
      </div>
      <div className="form">
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
          <label className="isAdmin">
            <input type="checkbox" name="isAdmin" onChange={handleChange}/>
            is admin
          </label>
        )}
        <button className="form-submit-btn"
                onClick={registerHandler}
                disabled={loading}
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </div>
  )
}

export default LoginForm;