import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import adminAvatar from '../../assets/adminAvatar.png';
import userAvatar from '../../assets/userAvatar.png';
import profiles from '../../assets/profiles.png';
import dashboard from '../../assets/dashboard.png';
import users from '../../assets/users.png';
import styles from './Header.module.scss';

const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  }

  return (
    <header className={styles.header}>
      <div className={styles.avatarContainer}>
        <span className={`${styles.avatar} ${auth.isAdmin ? styles.admin : styles.user}`}
              style={{
          backgroundImage: `url(${auth.isAdmin ? adminAvatar : userAvatar})`
        }} />
        <span>1White</span>
      </div>
      <div className={styles.wrapper}>
        { auth.isAdmin && (
          <nav className={styles.menu}>
            <div className={styles.button}>
              <NavLink to="/profiles">
                Profiles
                <img src={profiles} alt="profiles logo"/>
              </NavLink>
            </div>
            <div className={styles.button}>
              <NavLink to="/dashboard">
                Dashboard
                <img src={dashboard} alt="dashboard logo"/>
              </NavLink>
            </div>
            <div className={styles.button}>
              <NavLink to="/users">
                Users
                <img src={users} alt="users logo"/>
              </NavLink>
            </div>
          </nav>
        )}
        <div className={styles.logout}>
          <a href="/" onClick={logoutHandler}>Log Out</a>
        </div>
      </div>
    </header>
  );
}

export default Header;