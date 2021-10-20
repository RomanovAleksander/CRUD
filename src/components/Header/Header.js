import React from 'react';
import './header.css';
import avatar from '../../assets/avatar.png';
import profiles from '../../assets/profiles.png';
import dashboard from '../../assets/dashboard.png';
import users from '../../assets/users.png';

const Header = () => {
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
            Profiles
            <img src={profiles} alt="profiles logo"/>
          </div>
          <div className="nav-button">
            Dashboard
            <img src={dashboard} alt="dashboard logo"/>
          </div>
          <div className="nav-button">
            Users
            <img src={users} alt="users logo"/>
          </div>
        </nav>
        <div className="log-out">Log Out</div>
      </div>
    </header>
  );
}

export default Header;
