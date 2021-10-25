import {
  SET_PROFILES,
  CREATE_PROFILE,
  // UPDATE_PROFILE,
  DELETE_PROFILE
} from '../actions/profiles/types';

const initialState = {
    profiles: [],
    profile: {}
};

export const profiles = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PROFILES:
      return {
        ...state,
        profiles: [...payload.items]
      };

    case CREATE_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, payload.item]
      }

    case DELETE_PROFILE:
      const newArray = state.profiles.filter(profile => profile._id !== payload.id);

      return {
        ...state,
        profiles: newArray
      }

    default:
      return state
  }
};
