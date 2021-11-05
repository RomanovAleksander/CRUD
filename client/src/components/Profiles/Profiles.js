import React, {useCallback, useContext, useEffect} from 'react';
import { connect } from 'react-redux';
import {AuthContext} from '../../context/AuthContext';
import {useParams} from 'react-router-dom';
import {setProfiles, deleteProfile, changeProfile} from '../../actions/profiles/actions';
import {toggleForm} from '../../actions/modal/actions';
import {loadState} from '../../actions/users/actions';
import {useHttp} from '../../hooks/http.hook';
import {toast, ToastContainer} from 'react-toastify';
import {Loader} from '../Loader/Loader';
import {EditIconComponent} from '../../assets/EditIconComponent';
import {DeleteIconComponent} from '../../assets/DeleteIconComponent';
import plus from '../../assets/plus.svg';
import styles from './Profiles.module.scss';

const Profiles = ({ profiles, setProfiles, deleteProfile,
                    changeProfile, toggleForm, loadState,
                    loadingState }) => {
  const {token} = useContext(AuthContext);
  const {request, loading} = useHttp();
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

  const fetchProfiles = useCallback(async () => {
    try {
      if (userId) {
        const data = await request(`/api/profile/${userId}`, 'GET', null,{
          Authorization: `Bearer ${token}`
        });
        setProfiles(data);
      } else {
        const data = await request(`/api/profile/`, 'GET', null,{
          Authorization: `Bearer ${token}`
        });
        setProfiles(data);
      }
    } catch (e) {}
  }, [token, request, setProfiles, userId])

  const fetchProfileDelete = useCallback(async (id) => {
    try {
      const data = await request('/api/profile/delete', 'DELETE', {id}, {
        Authorization: `Bearer ${token}`
      });
      deleteProfile(id);
      showToast(data.message, 'success');
    } catch (e) {}
  }, [token, request, deleteProfile])

  useEffect(() => {
    if (!loadingState) fetchProfiles();
    if (loadingState && !userId) loadState();
  }, [fetchProfiles, loadingState, loadState, userId])

  const handleDelete = (id) => {
    fetchProfileDelete(id)
  }

  const handleEdit = (id) => {
    changeProfile(id);
    toggleForm();
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Profiles:</div>
        <div className={styles.contentWrapper}>
          {profiles.map((profile) => {
            return (
              <div className={styles.profile} key={profile._id}>
                <p className={styles.title}>{profile.name}</p>
                <p>{profile.gender}</p>
                <p>{profile.birthdate.split('-').reverse().join('.')}</p>
                <p>{profile.city}</p>
                <div className={styles.buttonsWrapper}>
                  <button className={`${styles.button} ${styles.edit}`}
                          onClick={() => handleEdit(profile._id)}
                  >
                    edit
                    <EditIconComponent />
                  </button>
                  <span className={styles.divingLine} />
                  <button className={`${styles.button} ${styles.delete}`}
                          onClick={() => handleDelete(profile._id)}
                          data-testid='profiles-delete'
                  >
                    delete
                    <DeleteIconComponent />
                  </button>
                </div>
              </div>
            )
          })}
          <div className={`${styles.profile} ${styles.pointer}`}
               onClick={() => toggleForm() }
          >
            <div className={styles.createBtn}>
              <img src={plus} alt="create"/>
            </div>
            <p>Create new profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setProfiles, deleteProfile, changeProfile, toggleForm, loadState
};

const mapStateToProps = state => ({
  profiles: state.profiles.profiles,
  loadingState: state.user.loadingState
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
