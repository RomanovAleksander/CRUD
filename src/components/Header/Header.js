import React from 'react';
import './header.css';
import avatar from '../../assets/avatar.png';

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
          <div className="nav-button">Profiles</div>
          <div className="nav-button">Dashboard</div>
          <div className="nav-button">Users</div>
        </nav>
        <div className="log-out">Log Out</div>
      </div>
    </header>
  );
}

export default Header;
