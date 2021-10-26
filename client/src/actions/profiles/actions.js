import {
  SET_PROFILES,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  CHANGE_PROFILE,
  DELETE_PROFILE,
  CLEAR_PROFILE_DATA
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

const deleteProfile = (id) => ({
  type: DELETE_PROFILE,
  payload: {
    id
  }
});

const changeProfile = (id) => ({
  type: CHANGE_PROFILE,
  payload: {
    id
  }
});

const updateProfile = (items) => ({
  type: UPDATE_PROFILE,
  payload: {
    ...items
  }
});

const clearProfileData = () => ({
  type: CLEAR_PROFILE_DATA
})

export {
  setProfiles,
  createProfile,
  changeProfile,
  updateProfile,
  deleteProfile,
  clearProfileData
};
