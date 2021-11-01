import {
  changeProfile, clearProfileData,
  createProfile, deleteProfile,
  setProfiles, updateProfile

} from '../../actions/profiles/actions';
import {profiles} from '../profiles';

describe('User Reducer', () => {
  const initialState = {
    profiles: [],
    profile: null
  };
  const profileData = {
    name: 'test',
    gender: 'male',
    birthdate: '1999-12-20',
    city: 'Kyiv',
    id: '617fb26a35068083bd343f2r'
  };

  test('should return the initial state', () => {
    expect(profiles(undefined, {})).toEqual(initialState);
  });

  test('profiles should be added', () => {
    expect(profiles(undefined, setProfiles([profileData, profileData])))
      .toEqual({...initialState, profiles: [profileData, profileData]});
  });

  test('profiles should be added', () => {
    expect(profiles(undefined, setProfiles([profileData, profileData])))
      .toEqual({...initialState, profiles: [profileData, profileData]});
  });

  test('profile should be created', () => {
    expect(profiles(undefined, createProfile(profileData)))
      .toEqual({...initialState, profiles: [...initialState.profiles, profileData]});
  });

  test('profile should be deleted', () => {
    const newArray = initialState.profiles.filter(profile => profile._id !== profileData.id);

    expect(profiles(undefined, deleteProfile(profileData)))
      .toEqual({...initialState, profiles: newArray});
  });

  test('profile should be changed', () => {
    const profile = initialState.profiles.find(profile => profile._id === profileData.id);

    expect(profiles(undefined, changeProfile(profileData.id)))
      .toEqual({...initialState, profile: profile});
  });

  test('profile should be updated', () => {
    initialState.profiles.push(profileData);
    const updatedProfiles = initialState.profiles.map(profile => {
      return profile.id === profileData.id ? {
        ...profileData
      } : profile
    });

    expect(profiles(initialState, updateProfile({...profileData, name: 'tested', _id: profileData.id})))
      .toEqual({...initialState, profiles: updatedProfiles, profile: null});
  });

  test('profile data should be cleared', () => {
    initialState.profiles.pop();
    expect(profiles(undefined, clearProfileData()))
      .toEqual({...initialState, profile: null});
  });
});
