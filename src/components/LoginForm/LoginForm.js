import React, {useState} from 'react';
import './loginForm.css';

const LoginForm = ({ isSignIn }) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setState(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }

  return (
    <div className="form-wrapper">
      <div className="form-title">
        {isSignIn ? 'Sign in' : 'Create your account'}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        {!isSignIn && (
          <label>
            Username
            <input type="username" name="username" onChange={handleChange}/>
          </label>
        )}
        <label>
          Email
          <input type="email" name="email" onChange={handleChange}/>
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleChange}/>
        </label>
        {!isSignIn && (
          <label>
            <input type="checkbox" name="isAdmin" onChange={handleChange}/>
            is admin
          </label>
        )}
        <button>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
  )
}

export default LoginForm;