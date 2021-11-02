import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import adminAvatar from '../../assets/adminAvatar.png';
import userAvatar from '../../assets/userAvatar.png';
import profiles from '../../assets/profiles.svg';
import dashboard from '../../assets/dashboard.svg';
import users from '../../assets/users.svg';
import styles from './Header.module.scss';

const Header = ({ username }) => {
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
        <span data-testid="user-username">{username}</span>
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
        <div className={styles.logout} data-testid="logout-btn">
          <a href="/" onClick={logoutHandler}>Log Out</a>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = state => ({
  username: state.user.username
});

export default connect(mapStateToProps)(Header);
