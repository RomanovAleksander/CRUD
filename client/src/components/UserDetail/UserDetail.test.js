import React from 'react';
import UserDetail from './UserDetail';
import {fireEvent, render, waitFor} from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const fakeData = {
  _id: '617c0b1507d9aa367606e805',
  email: "email@gmail.com",
  username: "username",
  profiles: [],
  isAdmin: false
};

describe('UserDetail', () => {
  let store;
  const logout = jest.fn();

  beforeEach(() => {
    store = mockStore({
      user: {
        user: fakeData,
        loadingState: false
      },
    });
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(fakeData)
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders userDetail',async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    const {getByText} = render(
      <Router>
        <AuthContext.Provider value={{token: "", logout}}>
          <Provider store={store}>
            <UserDetail/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    );


     await waitFor(() => {
       expect(getByText(fakeData.username)).toBeInTheDocument();
       expect(getByText(fakeData.email)).toBeInTheDocument();
       expect(getByText('user')).toBeInTheDocument();
       expect(setState).toBeCalled();
     })
  });
});
