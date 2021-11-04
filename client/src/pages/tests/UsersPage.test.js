import React from 'react';
import { UsersPage } from "../UsersPage";
import { render, waitFor, act } from "@testing-library/react";
import {AuthContext} from "../../context/AuthContext";
import {BrowserRouter as Router} from "react-router-dom";

const fakeData = [{
  _id: '617c0b1507d9aa367606e805',
  email: "email@gmail.com",
  username: "username",
  profiles: [],
  isAdmin: false
}];

describe('UsersPage', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(fakeData) })
      )
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders users data', async () => {
    const {getByText} = render(
      <Router>
        <AuthContext.Provider value={{}}>
          <UsersPage/>
        </AuthContext.Provider>
      </Router>
    );

    await waitFor(() => {
      expect(getByText(fakeData[0].email)).toBeInTheDocument();
      expect(getByText(fakeData[0].username)).toBeInTheDocument();
    });
  });

  it('users state should be changed',() => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    render(
      <Router>
        <AuthContext.Provider value={{}}>
          <UsersPage/>
        </AuthContext.Provider>
      </Router>
    );

    waitFor(() => {
      expect(setState).toHaveBeenCalledWith(fakeData);
    });
  });
});
