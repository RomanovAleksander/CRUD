import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Routes', () => {
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
        {routes}
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
        {routes}
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
