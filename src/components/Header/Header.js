import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import avatar from '../../assets/avatar.png';
import profiles from '../../assets/profiles.png';
import dashboard from '../../assets/dashboard.png';
import users from '../../assets/users.png';
import './header.css';
import {AuthContext} from "../../context/AuthContext";

const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  }

  return (
    <header className="header">
      <div className="avatar-block">
        <span className="avatar" style={{
          backgroundImage: `url(${avatar})`
        }}/>
        <span className="name">1White</span>
      </div>
      <div className="buttons-wrapper">
        <nav className="nav-menu">
          <div className="nav-button">
            <NavLink to="/profiles">
              Profiles
              <img src={profiles} alt="profiles logo"/>
            </NavLink>
          </div>
          <div className="nav-button">
            <NavLink to="/dashboard">
              Dashboard
              <img src={dashboard} alt="dashboard logo"/>
            </NavLink>
          </div>
          <div className="nav-button">
            <NavLink to="/users">
              Users
              <img src={users} alt="users logo"/>
            </NavLink>
          </div>
        </nav>
        <div className="log-out">
          <a href="/" onClick={logoutHandler}>Log Out</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
