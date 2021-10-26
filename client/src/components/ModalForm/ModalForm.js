import React, {useContext, useEffect, useState} from 'react';
import styles from './ModalForm.module.scss';
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {ToastContainer, toast} from "react-toastify";

import { connect } from 'react-redux';
import {createProfile, updateProfile, clearProfileData} from '../../actions/profiles/actions';
import {toggleForm} from '../../actions/modal/actions';
import {useParams} from "react-router-dom";


const ModalForm = ({ createProfile, updateProfile, clearProfileData, toggleForm, profile }) => {
  const defaultData = {
    name: '',
    gender: '',
    birthdate: '',
    city: ''
  };
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [profileData, setProfileData] = useState(defaultData);

  const userId = useParams().id;

  useEffect(() => {
    if (profile) {
      setProfileData(profile);
    } else {
      setProfileData({
        name: '',
        gender: '',
        birthdate: '',
        city: ''
      })
    }
  }, [profile])

  const showToast = (message, type) => {
    toast[`${type}`](message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }

  const handleChange = (event) => {
    setProfileData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  }

  const handleClose = () => {
    toggleForm();
    clearProfileData();
  }

  const submitHandler = async () => {
    try {
      if (!profile) {
        const data = await request('/api/profile/create', 'POST', {...profileData, userId}, {
          Authorization: `Bearer ${auth.token}`
        });
        createProfile(data.profile);
        showToast(data.message, 'success');
        toggleForm();
      } else {
        const data = await request('/api/profile/update', 'POST', {...profile, ...profileData}, {
          Authorization: `Bearer ${auth.token}`
        });
        updateProfile(data.profile);
        showToast(data.message, 'success');
        toggleForm();
      }
    } catch (e) {}
  }

  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <div className={styles.modal}>
        <div className={styles.labelWrapper}>
          <label>
            name:
            <input name="name"
                   type="text"
                   value={profileData.name}
                   onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.genderList}>
          gender:
          <div>
            <input id="male" type="radio" onChange={handleChange}
                   name="gender" value="male" required/>
            <label htmlFor="male">male</label>
          </div>
          <div>
            <input id="female" type="radio" onChange={handleChange}
                   name="gender" value="female" required/>
            <label htmlFor="female">female</label>
          </div>
        </div>
        <div>
          <label>
            birthdate:
            <input name="birthdate"
                   data-date-format="DD MMMM YYYY"
                   type="date"
                   value={profileData.birthdate}
                   onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            city:
            <input name="city"
                   type="text"
                   value={profileData.city}
                   onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={submitHandler}>Save</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  createProfile,
  updateProfile,
  clearProfileData,
  toggleForm
};

const mapStateToProps = state => ({
  profile: state.profiles.profile,
  isCreate: state.profiles.isCreate
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalForm);
