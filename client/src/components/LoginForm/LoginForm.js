import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './LoginForm.module.scss';

const LoginForm =  ({ isSignIn, userData,
                      loading, submitHandler,
                      handleCheck, handleChange
                    }) => {
  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <div className={styles.title}>
        {isSignIn ? 'Sign in' : 'Create your account'}
      </div>
      <form className={styles.form} onSubmit={submitHandler}>
        {!isSignIn && (
          <label>
            Username
            <input type="text"
                   name="username"
                   onChange={handleChange}
                   value={userData.username}
                   minLength="1"
                   required
            />
          </label>
        )}
        <label>
          Email
          <input type="email"
                 name="email"
                 onChange={handleChange}
                 value={userData.email}
                 required
          />
        </label>
        <label>
          Password
          <input type="password"
                 name="password"
                 onChange={handleChange}
                 value={userData.password}
                 minLength="6"
                 required
          />
        </label>
        {!isSignIn && (
          <label className={styles.isAdmin}>
            <input type="checkbox" name="isAdmin"
                   checked={userData.isAdmin}
                   onChange={handleCheck}
            />
            is admin
          </label>
        )}
        <div className={styles.buttonsWrapper}>
          <button className={styles.submitButton}
                  type="submit"
                  disabled={loading}
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <span className={styles.divingLine} />
          <a href={`${!isSignIn ? '/' : '/signup'}`}>
            {!isSignIn ? 'Sign In' : 'Sign Up'}
          </a>
        </div>
      </form>
    </div>
  )
};

export default LoginForm;
