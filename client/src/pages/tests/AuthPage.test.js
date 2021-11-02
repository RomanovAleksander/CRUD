import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AuthPage } from '../AuthPage';
// import { useHttp } from '../../hooks/http.hook';
// import LoginForm from '../../components/LoginForm/LoginForm';

// jest.mock('../../hooks/http.hook', () => ({
//   useHttp: jest.fn()
// }));
//
// jest.mock('../../components/LoginForm/LoginForm', () => ({
//   LoginForm: jest.fn()
// }));

describe('AuthPage', () => {
  // beforeEach(() => {
  //   useHttp.getMockImplementation(() => ({}));
  //   LoginForm.mockImplementation(() => null);
  // });

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
