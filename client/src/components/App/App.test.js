import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContext} from "../../context/AuthContext";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

it('should render App component', () => {
  let store = mockStore({
    user: {
      username: 'test'
    }
  });

  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <AuthContext.Provider value={{}}>
        <Provider store={store}>
          <App/>
        </Provider>
      </AuthContext.Provider>
    </Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
