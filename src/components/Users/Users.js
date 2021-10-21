import React, {useEffect} from 'react';
import './users.css';
import {useHttp} from "../../hooks/http.hook";

const Users = () => {
  const {request} = useHttp();

  const getUsers = async () => {
    try {
        const data = await request('/api/auth/', 'GET');
        console.log(data)
    } catch (e) {}
  }

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="page-title">Users:</div>
        <div className="users-info">
          <div className="users-info__block">
            <p className="user-title">1White</p>
            <p className="user-email">danilo.bilyi@gmail.com</p>
            <p className="user-profiles">3 profiles</p>
          </div>
          <div className="users-info__block">
            <p className="user-title">1White</p>
            <p className="user-email">mail@mail.com</p>
            <p className="user-profiles">1 profile</p>
          </div>
          <div className="users-info__block">
            <p className="user-title">1White</p>
            <p className="user-email">mail@mail.com</p>
            <p className="user-profiles">1 profile</p>
          </div>
          <div className="users-info__block">
            <p className="user-title">1White</p>
            <p className="user-email">mail@mail.com</p>
            <p className="user-profiles">1 profile</p>
          </div>
          <div className="users-info__block">
            <p className="user-title">1White</p>
            <p className="user-email">mail@mail.com</p>
            <p className="user-profiles">1 profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users;
