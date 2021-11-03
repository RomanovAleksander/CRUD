import React from 'react';
import {render, waitFor, act, getByDisplayValue, getByTestId, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ModalForm from "./ModalForm";

const mockStore = configureStore([]);
const fakeProfile = {
  _id: "617fb26a35068083bd343f3r",
  name: "profile",
  gender: "male",
  birthdate: "1999-12-20",
  city: "Kyiv",
  owner: "617c0b1507d9aa367606e805"
};
const fakeUser = {
  _id: '617c0b1507d9aa367606e805',
  email: "email@gmail.com",
  username: "username",
  profiles: [],
  isAdmin: false
};

describe('ModalForm', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      profiles: {
        profile: fakeProfile,
        isCreate: false
      },
      user: {
        user: fakeUser
      }
    });
  });

  it('renders profile updating modal form',async () => {
     const {getByDisplayValue} = render(
        <Router>
          <AuthContext.Provider value={{}}>
            <Provider store={store}>
              <ModalForm isUser={false}/>
            </Provider>
          </AuthContext.Provider>
        </Router>
      )

    await waitFor(() => {
      expect(getByDisplayValue(fakeProfile.name)).toBeInTheDocument();
      expect(getByDisplayValue(fakeProfile.gender)).toBeInTheDocument();
      expect(getByDisplayValue(fakeProfile.city)).toBeInTheDocument();
    })
  });

  it('renders profile creating modal form',async () => {
    store = mockStore({
      profiles: {
        profile: null,
        isCreate: true
      },
      user: {
        user: null
      }
    });

    const { getByTestId } = render(
      <Router>
        <AuthContext.Provider value={{}}>
          <Provider store={store}>
            <ModalForm isUser={false}/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    )

    await waitFor(() => {
      expect(getByTestId('profile-name')).toHaveValue('');
      expect(getByTestId('profile-birthdate')).toHaveValue('');
      expect(getByTestId('profile-city')).toHaveValue('');
    })
  });

  it('renders user updating modal form',async () => {
    const {getByDisplayValue} = render(
      <Router>
        <AuthContext.Provider value={{}}>
          <Provider store={store}>
            <ModalForm isUser={true}/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    )

    await waitFor(() => {
      expect(getByDisplayValue(fakeUser.username)).toBeInTheDocument();
      expect(getByDisplayValue(fakeUser.email)).toBeInTheDocument();
    })
  });

  it('modal form should be closed', () => {
    const component = render(
      <Router>
        <AuthContext.Provider value={{}}>
          <Provider store={store}>
            <ModalForm isUser={true}/>
          </Provider>
        </AuthContext.Provider>
      </Router>
    )

    const modal = component.queryByTestId('modal-form');
    fireEvent.click(component.getByTestId('close-btn'));
    waitFor(() => {
      expect(modal).not.toBeInTheDocument();
    });
  });
});
