import { combineReducers } from 'redux';
import { profiles } from './profiles';
import { modal } from './modal';
import { user } from './user';

export const reducers = combineReducers({
  profiles,
  user,
  modal
});
