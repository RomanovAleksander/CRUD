import {
  SET_USER,
  CHANGE_USER,
  UPDATE_USER
} from '../actions/users/types';

const initialState = {
  user: {},
  isUser: false
};

export const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      }

    case CHANGE_USER:
      return {
        ...state,
        isUser: true
      }

    case UPDATE_USER:
      return {
        ...state,
        user: payload,
        isUser: false
      }

    default:
      return state
  }
};
