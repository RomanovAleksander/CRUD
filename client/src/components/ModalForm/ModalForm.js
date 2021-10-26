import React, {useContext, useEffect, useState} from 'react';
import styles from './ModalForm.module.scss';
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {ToastContainer, toast} from "react-toastify";

import { connect } from 'react-redux';
import {createProfile, updateProfile, clearProfileData} from '../../actions/profiles/actions';
import {toggleForm} from '../../actions/modal/actions';
import {clearUserData, setUser, updateUser, loadState} from '../../actions/users/actions';
import {useParams} from "react-router-dom";

import check from '../../assets/check.png';
import close from '../../assets/close.png';


const ModalForm = ({ createProfile, updateProfile,
                     clearProfileData, toggleForm,
                     profile, user,
                     isUser = false,
                     updateUser, setUser, clearUserData,
                     loadState}) => {
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [formData, setFormData] = useState();

  const userId = useParams().id;

  useEffect(() => {
    if (!isUser) {
      if (profile) {
        setFormData(profile);
      } else {
        setFormData({
          name: '',
          gender: '',
          birthdate: '',
          city: ''
        })
      }
    } else {
      setFormData(user)
    }
  }, [profile, user, isUser])

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
    setFormData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  }

  const handleClose = () => {
    toggleForm();
    clearProfileData();
    clearUserData();
  }

  const changeToken = async (user) => {
    try {
      const data = await request('/api/auth/generate', 'POST', {email: user.email}, {
        Authorization: `Bearer ${auth.token}`
      });
      auth.login(data.token);
    } catch (e) {
      console.log(e.message)
    }
  }

  const submitHandler = async () => {
    try {
      if (!isUser) {
        if (!profile) {
          const data = await request('/api/profile/create', 'POST', {...formData, userId}, {
            Authorization: `Bearer ${auth.token}`
          });
          createProfile(data.profile);
          showToast(data.message, 'success');
          toggleForm();
        } else {
          const data = await request('/api/profile/update', 'POST', {...profile, ...formData}, {
            Authorization: `Bearer ${auth.token}`
          });
          updateProfile(data.profile);
          showToast(data.message, 'success');
          toggleForm();
        }
      } else {
        const data = await request('/api/user/update', 'POST', {user: {...formData}, id: userId}, {
          Authorization: `Bearer ${auth.token}`
        });
        if (data.user._id === userId && data.user.isAdmin !== user.isAdmin) {
          loadState();
          await changeToken(data.user);
          toggleForm();
          return;
        }
        showToast(data.message, 'success');
        updateUser(data.user);
        setUser(data.user);
        toggleForm();
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <div className={styles.modal}>
        {isUser && formData && (
          <>
            <div className={styles.labelWrapper}>
              <label>
                user name:
                <input name="username"
                       type="text"
                       value={formData.username || ''}
                       onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.labelWrapper}>
              <label>
                email:
                <input name="email"
                       type="text"
                       value={formData.email || ''}
                       onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.genderList}>
              <span>role:</span>
              <div className={styles.radioWrapper}>
                <label>
                  <input id="user" type="radio" onChange={handleChange}
                         name="isAdmin" value="false" required/>
                  <span>user</span>
                </label>
                <label>
                  <input id="admin" type="radio" onChange={handleChange}
                         name="isAdmin" value="true" required/>
                  admin
                </label>
              </div>
            </div>
          </>
        )}
        {!isUser && formData && (
          <>
            <div className={styles.labelWrapper}>
              <label>
                name:
                <input name="name"
                       type="text"
                       value={formData.name || ''}
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
                       value={formData.birthdate || ''}
                       onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                city:
                <input name="city"
                       type="text"
                       value={formData.city || ''}
                       onChange={handleChange}
                />
              </label>
            </div>
          </>
        )}
        <div className={styles.buttonsWrapper}>
          <button onClick={submitHandler}
                  style={{
                    backgroundImage: `url(${check})`
                  }}
          />
          <button onClick={handleClose}
                  style={{
                    backgroundImage: `url(${close})`
                  }}
          />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  createProfile,
  updateProfile,
  clearProfileData,
  toggleForm,
  setUser,
  updateUser,
  clearUserData,
  loadState
};

const mapStateToProps = state => ({
  profile: state.profiles.profile,
  isCreate: state.profiles.isCreate,
  user: state.user.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalForm);
