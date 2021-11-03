import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

describe('Routes', () => {
  const mockStore = configureStore([]);
  let store;
  store = mockStore({
    modal: {
      isOpen: false
    },
    profiles: {
      profiles: [{
        _id: "617fb26a35068083bd343f3r",
        name: "profile",
        gender: "male",
        birthdate: "1999-12-20",
        city: "Kyiv",
        owner: "617c0b1507d9aa367606e805"
      }],
    },
    user: {
      loadingSate: false
    }
  });

  it('should render loginForm', () => {
    const routes = useRoutes(false, false, true);
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        {routes}
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render user pages', () => {
    const routes = useRoutes(true, false, true);
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Provider store={store}>
          {routes}
        </Provider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render admin pages', () => {
    const routes = useRoutes(true, true, true);
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Provider store={store}>
          {routes}
        </Provider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
