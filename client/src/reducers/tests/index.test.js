import {createStore} from 'redux';
import {reducers} from '../index';
import {profiles} from '../profiles';
import {user} from '../user';
import {modal} from '../modal';

test('Root Reducer', () => {
  let store = createStore(reducers);
  expect(store.getState().profiles).toEqual(profiles(undefined, {}));
  expect(store.getState().user).toEqual(user(undefined, {}));
  expect(store.getState().modal).toEqual(modal(undefined, {}));
});
