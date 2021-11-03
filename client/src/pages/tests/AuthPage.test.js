import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { AuthPage } from '../AuthPage';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
// import { useHttp } from '../../hooks/http.hook';
// import LoginForm from '../../components/LoginForm/LoginForm';

// jest.mock('../../hooks/http.hook', () => ({
//   useHttp: jest.fn()
// }));
//
// jest.mock('../../components/LoginForm/LoginForm', () => ({
//   LoginForm: jest.fn()
// }));

const data = {
  token: "",
  user: {
    _id: "615559cf21d8c861693cf3f4",
    username: "test",
    email: "test@gmail.com",
    type: "user",
    password: "123123",
  },
};

describe('AuthPage', () => {
  let originFetch;
  const history = createMemoryHistory();

  beforeEach(() => {
    originFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originFetch;
  });

  it('renders correctly', () => {
    const {queryByTestId} = render(<AuthPage />);
    expect(queryByTestId('login-form')).toBeTruthy();
  });

  it('input value updates on change', () => {
    const {queryByTestId} = render(<AuthPage />);
    const emailInput = queryByTestId('email-input');

    fireEvent.change(emailInput, {target: {value: 'test'}});
    expect(emailInput.value).toBe('test');
  });

  it("should push user data to API / sign up", async () => {
    const fakeResponse = data;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;

    const { getByTestId } = render(
      <Router history={history}>
        <AuthPage isSignIn={false}/>
      </Router>
    );
    const username = getByTestId("username-input");
    const email = getByTestId("email-input");
    const password = getByTestId("password-input");

    userEvent.type(username, data.user.username);
    userEvent.type(email, data.user.email);
    userEvent.type(password, data.user.password);
    userEvent.click(getByTestId("submit-button"));

    expect(username.value).toBe(data.user.username);
    expect(email.value).toBe(data.user.email);
    expect(password.value).toBe(data.user.password);
    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });

  it("should fetch data from API / sign in", async () => {
    const fakeResponse = data;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;

    const { getByTestId } = render(
      <Router history={history}>
        <AuthPage isSignIn={true}/>
      </Router>
    );

    const email = getByTestId("email-input");
    const password = getByTestId("password-input");

    userEvent.type(email, data.user.email);
    userEvent.type(password, data.user.password);
    userEvent.click(getByTestId("submit-button"));

    expect(email).toHaveValue(data.user.email);
    expect(password).toHaveValue(data.user.password);
    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });


  // describe('without SignIn', () => {
  //   it('renders the from for sign up', () => {
  //     const {queryByTestId} = render(<AuthPage isSignIn={false}/>);
  //     expect(queryByTestId('username-input')).toBeTruthy();
  //     expect(LoginForm).toBeCalledWith(
  //       expect.objectContaining({
  //         defaultValues: { isSignIn: false }
  //       }),
  //       {}
  //     )
  //   });
  //
  //   describe('on form submit', () => {
  //     it.todo('makes request and navigates to the root page')
  //   });
  // });
});
