import React from 'react';
import Profiles from './Profiles';
import {render, waitFor, act, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import { renderWithProviders } from "../../test-utils/test-utils";
import {Route} from "react-router-dom";
import ModalForm from "../ModalForm/ModalForm";


const mockStore = configureStore([]);
const fakeData = [{
  _id: "617fb26a35068083bd343f3r",
  name: "profile",
  gender: "male",
  birthdate: "1999-12-20",
  city: "Kyiv",
  owner: "617c0b1507d9aa367606e805"
}];

describe('Profiles', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      profiles: {
        profiles: fakeData
      },
      user: {
        loadingState: false
      }
    });
    jest.spyOn(global, 'fetch')
      .mockImplementation((url) => {
          switch (url) {
            case '/api/profile/':
              return Promise.resolve({ json: () => Promise.resolve(fakeData) });
            case '/api/profile/617c0b1507d9aa367606e805':
              return Promise.resolve({ json: () => Promise.resolve(fakeData) });
            case '/api/profile/delete':
              return Promise.resolve({ json: () => Promise.resolve({ message: 'Profile Deleted' }) });
              default:
              break
          }
        }
      );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders all profiles',async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    component = render(
      <Router>
        <AuthContext.Provider value={{}}>
          <Provider store={store}>
            <Profiles/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    )


    await waitFor(() => {
      expect(component.getByText(fakeData[0].name)).toBeInTheDocument();
      expect(component.getByText(fakeData[0].gender)).toBeInTheDocument();
      expect(component.getByText(fakeData[0].birthdate.split('-').reverse().join('.'))).toBeInTheDocument();
      expect(component.getByText(fakeData[0].city)).toBeInTheDocument();
      expect(setState).toBeCalled();
    })
  });

  it('renders user profiles',async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    const { getByText } = renderWithProviders(
      <Route path="/user/:id">
        <AuthContext.Provider value={{}}>
          <Provider store={store}>
            <Profiles/>
          </Provider>
        </AuthContext.Provider>
      </Route>,
      {
        route: "/user/617c0b1507d9aa367606e805"
      }
    );

    await waitFor(() => {
      expect(getByText(fakeData[0].name)).toBeInTheDocument();
      expect(getByText(fakeData[0].gender)).toBeInTheDocument();
      expect(getByText(fakeData[0].birthdate.split('-').reverse().join('.'))).toBeInTheDocument();
      expect(getByText(fakeData[0].city)).toBeInTheDocument();
      expect(setState).toBeCalled();
    })
  });

  it('profile should be deleted', async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    const { getByText } = renderWithProviders(
      <Route path="/user/:id">
        <AuthContext.Provider value={{}}>
          <Provider store={store}>
            <Profiles/>
          </Provider>
        </AuthContext.Provider>
      </Route>,
      {
        route: "/user/617c0b1507d9aa367606e805"
      }
    );

    await waitFor(() => {
      fireEvent.click(component.getByTestId('profiles-delete'));
      expect(component.getByText('Profile Deleted')).toBeTruthy();
    })
  });
});
