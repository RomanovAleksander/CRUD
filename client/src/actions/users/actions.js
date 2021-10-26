import {
  SET_USER,
  CHANGE_USER,
  UPDATE_USER,
  CLEAR_USER_DATA,
  LOAD_STATE
} from './types';

const setUser = (item) => ({
  type: SET_USER,
  payload: {
    ...item
  }
});

const changeUser = (id) => ({
  type: CHANGE_USER,
  payload: {
    id
  }
});

const updateUser = (items) => ({
  type: UPDATE_USER,
  payload: {
    ...items
  }
});

const clearUserData = () => ({
  type: CLEAR_USER_DATA
})

const loadState = () => ({
  type: LOAD_STATE
})

export {
  setUser,
  changeUser,
  updateUser,
  clearUserData,
  loadState
};
