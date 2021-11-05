import React from 'react';
import UserDetail from './UserDetail';
import {fireEvent, render, waitFor} from '@testing-library/react';
import {AuthContext} from "../../context/AuthContext";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter, Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const mockStore = configureStore([]);
const fakeData = {
  id: '617c0b1507d9aa367606e805',
  email: "email@gmail.com",
  username: "username",
  profiles: [],
  isAdmin: false
};

describe('UserDetail', () => {
  let store;
  const logout = jest.fn();
  const history = createMemoryHistory();

  beforeEach(() => {
    store = mockStore({
      user: {
        user: fakeData,
        loadingState: false
      },
    });
    jest.spyOn(global, 'fetch')
      .mockImplementation((url) => {
          switch (url) {
            case '/api/user/undefined':
              return Promise.resolve({ json: () => Promise.resolve(fakeData) });
            case '/api/user/delete':
              return Promise.resolve({ json: () => Promise.resolve(fakeData) });
            default:
              break
          }
        }
      );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders userDetail',async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    const { getByText } = render(
      <BrowserRouter>
        <AuthContext.Provider value={{token: "", logout}}>
          <Provider store={store}>
            <UserDetail/>
          </Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );

     await waitFor(() => {
       expect(getByText(fakeData.username)).toBeInTheDocument();
       expect(getByText(fakeData.email)).toBeInTheDocument();
       expect(getByText('user')).toBeInTheDocument();
       expect(setState).toBeCalled();
     })
  });

  it('user should be deleted', async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    const {getByTestId} = render(
      <Router history={history}>
        <AuthContext.Provider value={{token: "", logout}}>
          <Provider store={store}>
            <UserDetail/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    );

    await waitFor(() => {
      fireEvent.click(getByTestId('delete'));
      expect(history.location.pathname).toBe('/');
    })
  });
});
