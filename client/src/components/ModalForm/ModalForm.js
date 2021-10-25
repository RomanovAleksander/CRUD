import React, {useContext, useState} from 'react';
import styles from './ModalForm.module.scss';
import {ModalContext} from "../../context/ModalContext";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {ToastContainer, toast} from "react-toastify";

import { connect } from 'react-redux';
import {createProfile} from '../../actions/profiles/actions';


const ModalForm = ({ createProfile }) => {
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

  const submitHandler = async () => {
    try {
      const data = await request('/api/profile/create', 'POST', {...profileData}, {
        Authorization: `Bearer ${auth.token}`
      });
      createProfile(data.profile);
      showToast(data.message, 'success');
      modal();
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
        <button onClick={() => modal() }>Close</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  createProfile
};

export default connect(
  null,
  mapDispatchToProps
)(ModalForm);
