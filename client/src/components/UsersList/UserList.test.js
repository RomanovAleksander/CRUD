import React from 'react';
import ReactDOM from 'react-dom';
import { UsersList } from './UsersList';
import { BrowserRouter as Router } from 'react-router-dom';

it('should render userList component', () => {
  const users = [{
    _id: '617c0b1507d9aa367606e805',
    email: "email@gmail.com",
    password: "$2a$12$k/HpaQp1LLbGKLVRTaH.6.amrIeJSpMaobf9fAmTtF8IsnES69OWa",
    username: "username",
    profiles: [],
    isAdmin: false
  }, {
    _id: '617c0b1507d9aa367606e8fg',
    email: "mail@gmail.com",
    password: "$2a$12$k/HpaQp1LLbGKLVRTaH.6.amrIeMKpMaobf9fAmTtF8IsnES69OWa",
    username: "name",
    profiles: [],
    isAdmin: true
  }];

  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <UsersList users={users}/>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
