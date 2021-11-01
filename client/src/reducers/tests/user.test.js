import {
  changeUser, clearUserData, loadState,
  setUser, setUsername, updateUser
} from '../../actions/users/actions';
import {user} from '../user';

describe('User Reducer', () => {
  const initialState = {
    user: {},
    username: null,
    isUser: false,
    loadingState: false
  };
  const userData = {
    username: 'test',
    email: 'test@gmail.com',
    password: '123123',
    isAdmin: true
  };

  test('should return the initial state', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  test('user should be added', () => {
    expect(user(undefined, setUser(userData)))
      .toEqual({...initialState, user: userData});
  });

  test('username should be added', () => {
    expect(user(undefined, setUsername(userData.username)))
      .toEqual({...initialState, username: userData.username});
  });

  test('isUser value should be changed', () => {
    expect(user(undefined, changeUser()))
      .toEqual({...initialState, isUser: true});
  });

  test('user should be updated', () => {
    expect(user(undefined, updateUser(userData)))
      .toEqual({...initialState, user:userData, isUser: false});
  });

  test('user data should be cleared', () => {
    expect(user(undefined, clearUserData()))
      .toEqual({...initialState});
  });

  test('loadingState should be changed', () => {
    expect(user(undefined, loadState()))
      .toEqual({...initialState, loadingState: !initialState.loadingState});
  });
});
