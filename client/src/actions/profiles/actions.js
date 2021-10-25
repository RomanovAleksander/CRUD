import {
  SET_PROFILES,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE
} from './types';

const setProfiles = (items) => ({
  type: SET_PROFILES,
  payload: {
    items
  }
});

const createProfile = (item) => ({
  type: CREATE_PROFILE,
  payload: {
    item
  }
});

const updateProfile = (...items) => ({
  type: UPDATE_PROFILE,
  payload: {
    items
  }
});

const deleteProfile = (id) => ({
  type: DELETE_PROFILE,
  payload: {
    id
  }
});

export {
  setProfiles,
  createProfile,
  updateProfile,
  deleteProfile
};
