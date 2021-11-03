import React, {useContext, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import {ToastContainer, toast} from 'react-toastify';
import {useHttp} from '../../hooks/http.hook';
import {createProfile, updateProfile, clearProfileData} from '../../actions/profiles/actions';
import {toggleForm} from '../../actions/modal/actions';
import {clearUserData, setUser, updateUser, loadState, setUsername} from '../../actions/users/actions';
import {CheckIconComponent} from '../../assets/CheckIconComponent';
import {CloseIconComponent} from '../../assets/CloseIconComponent';
import styles from './ModalForm.module.scss';


const ModalForm = ({ createProfile, updateProfile,
                     clearProfileData, toggleForm,
                     profile, user, isUser = false,
                     updateUser, setUser, clearUserData,
                     loadState, setUsername }) => {
  const auth = useContext(AuthContext);
  const {request, error, clearError} = useHttp();
  const [formData, setFormData] = useState();

  const userId = useParams().id;

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

  useEffect(() => {
    showToast(error, 'error');
    clearError();
  }, [error, clearError])

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

  const handleChange = (event) => {
    const isTrue = (value) => {
      if (value === 'true' || value === 'false') {
        return  (value === 'true');
      }
      return value;
    };

    setFormData(prevState => {
      return {
        ...prevState,
        [event.target.name]: isTrue(event.target.value)
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
    } catch (e) {}
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
        if (data.user._id === auth.userId && data.user.isAdmin !== formData.isAdmin) {
          loadState();
          await changeToken(data.user);
          toggleForm();
          return;
        }
        if (data.user._id === auth.userId && data.user.username !== formData.username) {
          setUsername(formData.username)
        }
        showToast(data.message, 'success');
        updateUser(formData);
        setUser(formData);
        toggleForm();
      }
    } catch (e) {}
  }

  return (
    <div className={styles.wrapper} data-testid="modal-form">
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
                         name="isAdmin" value="false" required
                         checked={formData.isAdmin === false}
                  />
                  <span>user</span>
                </label>
                <label>
                  <input id="admin" type="radio" onChange={handleChange}
                         name="isAdmin" value="true" required
                         checked={formData.isAdmin === true}
                  />
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
              <span>gender:</span>
              <div className={styles.radioWrapper}>
                <label>
                  <input id="male" type="radio" onChange={handleChange}
                         name="gender" value="male" required
                         checked={formData.gender === 'male'}
                  />
                  <span>male</span>
                </label>
                <label>
                  <input id="female" type="radio" onChange={handleChange}
                         name="gender" value="female" required
                         checked={formData.gender === 'female'}
                  />
                  <span>female</span>
                </label>
              </div>
            </div>
            <div className={styles.labelWrapper}>
              <label>
                birthdate:
                <input name="birthdate"
                       data-date-format="DD MMMM YYYY"
                       type="date"
                       value={formData.birthdate || ''}
                       max={new Date().toISOString().slice(0, -14)}
                       onChange={handleChange}
                />
              </label>
            </div>
            <div className={styles.labelWrapper}>
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
                  className={styles.check}
          >
            <CheckIconComponent />
          </button>
          <button onClick={handleClose}
                  className={styles.close}
          >
            <CloseIconComponent />
          </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  createProfile, updateProfile, clearProfileData,
  toggleForm, setUser, updateUser,
  clearUserData, loadState, setUsername
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
