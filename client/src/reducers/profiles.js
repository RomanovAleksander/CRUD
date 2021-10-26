import {
  SET_PROFILES,
  CREATE_PROFILE,
  CHANGE_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  CLEAR_PROFILE_DATA
} from '../actions/profiles/types';

const initialState = {
    profiles: [],
    profile: null
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

    case CHANGE_PROFILE:
      const profile = state.profiles.find(profile => profile._id === payload.id);

      return {
        ...state,
        profile: profile
      }

    case UPDATE_PROFILE:
      const updatedProfiles = state.profiles.map(profile => {
        return profile._id === payload._id ? {
          ...payload
        } : profile
      });
      console.log(updatedProfiles)

      return {
        ...state,
        profiles: updatedProfiles,
        profile: null
      }

    case CLEAR_PROFILE_DATA:
      return {
        ...state,
        profile: null
      }

    default:
      return state
  }
};
