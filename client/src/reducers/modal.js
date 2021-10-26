import {
  TOGGLE_FORM
} from '../actions/modal/types';

const initialState = {
  isOpen: false
};

export const modal = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_FORM:
      return {
        ...state,
        isOpen: !state.isOpen
      }

    default:
      return state
  }
};
