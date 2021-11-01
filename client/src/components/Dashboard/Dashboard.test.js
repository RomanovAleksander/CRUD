import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

it('should render Dashboard component', () => {
  const users = [{
    _id: '617c0b1507d9aa367606e805',
    email: "email@gmail.com",
    password: "$2a$12$k/HpaQp1LLbGKLVRTaH.6.amrIeJSpMaobf9fAmTtF8IsnES69OWa",
    username: "username",
    profiles: ["617fb26a35068083bd343f2e"],
    isAdmin: false
  }, {
    _id: '617c0b1507d9aa367606e8fg',
    email: "mail@gmail.com",
    password: "$2a$12$k/HpaQp1LLbGKLVRTaH.6.amrIeMKpMaobf9fAmTtF8IsnES69OWa",
    username: "name",
    profiles: [],
    isAdmin: true
  }];
  const profiles = {
    profiles: [{
      _id: "617fb26a35068083bd343f3r",
      name: "profile",
      gender: "male",
      birthdate: "1999-12-20",
      city: "Kyiv",
      owner: "617c0b1507d9aa367606e805"
    }],
    adults: 0
  };

  const div = document.createElement('div');
  ReactDOM.render(<Dashboard users={users} profiles={profiles}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
