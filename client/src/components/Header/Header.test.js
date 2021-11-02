// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from './Header';
import { Router } from 'react-router-dom';
// import renderer from 'react-test-renderer';

import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import MyConnectedComponent from './Header';
import {render, fireEvent} from "@testing-library/react";
import {AuthPage} from "../../pages/AuthPage";
import {AuthContext} from "../../context/AuthContext";
import { createMemoryHistory } from 'history'

const mockStore = configureStore([]);

describe('Header', () => {
  let store;
  let component;
  const logout = jest.fn();
  const history = createMemoryHistory();

  beforeEach(() => {
    store = mockStore({
      user: {
        username: 'test'
      }
    });

    component = render(
      <Router history={history}>
        <AuthContext.Provider value={{ logout: logout(), isAdmin: true } }>
          <Provider store={store}>
            <MyConnectedComponent/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    );
  });

  it('should render with given state from Redux store', () => {
    const username = component.queryByTestId('user-username');

    expect(username.innerHTML).toBe('test');
  });

  it('should logout on button click', () => {
    const button = component.queryByTestId('logout-btn');

    fireEvent.click(button);
    expect(logout).toHaveBeenCalledTimes(1);
    expect(history.location.pathname).toBe('/');
  });
});
