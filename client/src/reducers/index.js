import { combineReducers } from 'redux';
import { profiles } from './profiles';
import { modal } from './modal';

export const reducers = combineReducers({
  profiles,
  modal
});
