import { Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './Header';
import {render, fireEvent} from "@testing-library/react";
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
        <AuthContext.Provider value={{logout, isAdmin: true}}>
          <Provider store={store}>
            <Header/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    );
  });

  it('should render with given state from Redux store', () => {
    const username = component.queryByTestId('user-username');
    expect(username.innerHTML).toBe('test');
  });

  it('should render admin avatar', () => {
    const username = component.queryByTestId('avatar');
    expect(username.style._values).toEqual({ 'background-image': 'url(adminAvatar.png)' });
  });

  it("should navigate to pages", () => {
    fireEvent.click(component.getByTestId("toProfiles"));
    expect(history.location.pathname).toBe("/profiles");

    fireEvent.click(component.getByTestId("toDashboard"));
    expect(history.location.pathname).toBe("/dashboard");

    fireEvent.click(component.getByTestId("toUsers"));
    expect(history.location.pathname).toBe("/users");
  });

  it('should logout on button click', () => {
      fireEvent.click(component.getByTestId('logout-btn'));
      expect(history.location.pathname).toBe('/');
  });
});
