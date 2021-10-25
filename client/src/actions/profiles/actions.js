import {
  SET_PROFILES,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  CHANGE_PROFILE,
  DELETE_PROFILE,
  CLEAR_FORM
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

const clearForm = () => ({
  type: CLEAR_FORM
})

export {
  setProfiles,
  createProfile,
  changeProfile,
  updateProfile,
  deleteProfile,
  clearForm
};
