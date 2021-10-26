import {
  SET_USER,
  CHANGE_USER,
  UPDATE_USER,
  CLEAR_USER_DATA,
  LOAD_STATE
} from '../actions/users/types';

const initialState = {
  user: {},
  isUser: false,
  loadingState: false
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

    case CLEAR_USER_DATA:
      return {
        ...state,
        isUser: false
      }

    case LOAD_STATE:
      return {
        ...initialState,
        loadingState: !state.loadingState
      }

    default:
      return state
  }
};
