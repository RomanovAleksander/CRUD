import React from 'react';
import UserDetail from './UserDetail';
import {fireEvent, render, waitFor} from '@testing-library/react';
import {AuthContext} from "../../context/AuthContext";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
// import ReactRouter from 'react-router-dom';
// import Router from "react-router-dom";

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

  // Object.defineProperty(ReactRouter, "useLocation", {
  //   value: jest.fn(),
  //   configurable: true,
  //   writable: true,
  // });

  // jest.mock("react-router-dom", () => ({
  //   ...jest.requireActual("react-router-dom"),
  //   useParams: jest.fn(),
  // }));

  beforeEach(() => {
    store = mockStore({
      user: {
        user: fakeData,
        loadingState: false
      },
    });
    jest.spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(fakeData) })
      )
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders userDetail',async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    const {getByText} = render(
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

  // it('user should be deleted', async () => {
  //   // jest.mock('react-router-dom', () => ({
  //   //   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  //   //   useParams: () => ({
  //   //     id: '617c0b1507d9aa367606e805'
  //   //   }),
  //   //   useRouteMatch: () => ({ url: '/user/id' }),
  //   // }));
  //
  //   // jest.spyOn(ReactRouter, 'useParams')
  //   //   .mockReturnValue({ id: '617c0b1507d9aa367606e805' });
  //
  //   // jest.mock('react-router', () => ({
  //   //   useParams: jest.fn().mockReturnValue({ id: '617c0b1507d9aa367606e805' }),
  //   // }));
  //
  //   // jest.spyOn(Router, 'useParams').mockReturnValue({ id: '617c0b1507d9aa367606e805' })
  //
  //   // jest.mock('react-router-dom', () => {
  //   //   return {
  //   //     useParams: () => ({
  //   //       id: '617c0b1507d9aa367606e805'
  //   //     })
  //   //   }
  //   // })
  //
  //   const {getByTestId} = render(
  //         <AuthContext.Provider value={{}}>
  //           <Provider store={store}>
  //             <UserDetail/>
  //           </Provider>
  //         </AuthContext.Provider>
  //   );
  //
  //   await waitFor(() => {
  //     fireEvent.click(getByTestId('delete'));
  //     expect(history.location.pathname).toBe('/');
  //   })
  // })
});
