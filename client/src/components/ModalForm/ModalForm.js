import React, {useContext, useEffect, useState} from 'react';
import styles from './ModalForm.module.scss';
import {ModalContext} from "../../context/ModalContext";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {ToastContainer, toast} from "react-toastify";

import { connect } from 'react-redux';
import {createProfile, updateProfile, clearForm} from '../../actions/profiles/actions';
import {useParams} from "react-router-dom";


const ModalForm = ({ createProfile, updateProfile, clearForm, profile }) => {
  const defaultData = {
    name: '',
    gender: '',
    birthdate: '',
    city: ''
  };
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const modal = useContext(ModalContext);
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
    modal();
    clearForm();
  }

  const submitHandler = async () => {
    try {
      if (!profile) {
        console.log(userId)
        const data = await request('/api/profile/create', 'POST', {...profileData, userId}, {
          Authorization: `Bearer ${auth.token}`
        });
        createProfile(data.profile);
        showToast(data.message, 'success');
        modal();
      } else {
        const data = await request('/api/profile/update', 'POST', {...profile, ...profileData}, {
          Authorization: `Bearer ${auth.token}`
        });
        updateProfile(data.profile);
        showToast(data.message, 'success');
        modal();
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
  clearForm
};

const mapStateToProps = state => ({
  profile: state.profiles.profile,
  isCreate: state.profiles.isCreate
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalForm);
