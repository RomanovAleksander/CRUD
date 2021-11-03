import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import UserDetailPage from '../UserDetailPage';
import {render, fireEvent} from "@testing-library/react";
import {AuthContext} from "../../context/AuthContext";
import {BrowserRouter as Router} from "react-router-dom";

const mockStore = configureStore([]);
const fakeData = {
  _id: '617c0b1507d9aa367606e805',
  email: "email@gmail.com",
  username: "username",
  profiles: [],
  isAdmin: false
};

describe('Header', () => {
  let store;
  let component;
  let isOpen = false;

  beforeEach(() => {
    store = mockStore({
      modal: {
        isOpen: isOpen
      },
      profiles: {
        profiles: [],
        profile: null,
        isCreate: true
      },
      user: {
        isUser: false,
        user: fakeData,
        loadingState: false
      }
    });


    component = render(
      <Router>
        <AuthContext.Provider value={{}}>
          <Provider store={store}>
            <UserDetailPage/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    );
  });

  it('should not render modal form', () => {
    const modal = component.queryByTestId('modal-form');
    expect(modal).not.toBeInTheDocument();
    isOpen = true;
  });

  it('should render modal form', () => {
    const modal = component.queryByTestId('modal-form');
    expect(modal).toBeInTheDocument();
    isOpen = false;
  });
  // it('modal form should be opened', () => {
  //   console.log(component.getByTestId('user-detail'))
  // });
});
