import React, {useCallback, useContext, useEffect} from "react";
import { connect } from 'react-redux';
import {AuthContext} from "../../context/AuthContext";
import {ModalContext} from "../../context/ModalContext";
import {setProfiles, deleteProfile} from '../../actions/profiles/actions';
import {useHttp} from "../../hooks/http.hook";
import {Loader} from "../Loader/Loader";
import styles from './Profiles.module.scss';
import {toast, ToastContainer} from "react-toastify";

const Profiles = ({ profiles, setProfiles, deleteProfile }) => {
  const modal = useContext(ModalContext);
  const {token} = useContext(AuthContext);
  const {request, loading} = useHttp();

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
      const data = await request('/api/profile/', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setProfiles(data);
    } catch (e) {
      console.log(e.message)
    }
  }, [token, request, setProfiles])

  const fetchDeleteProfile = useCallback(async (id) => {
    try {
      const data = await request('/api/profile/delete', 'DELETE', {id}, {
        Authorization: `Bearer ${token}`
      });
      deleteProfile(id);
      showToast(data.message, 'success');
    } catch (e) {
      console.log(e.message)
    }
  }, [token, request, deleteProfile])

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles])

  const handleDelete = (id) => {
    fetchDeleteProfile(id)
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
                <p>{profile.birthdate}</p>
                <p>{profile.city}</p>
                <div className={styles.buttonsWrapper}>
                  <button className={styles.button}>edit</button>
                  <span className={styles.divingLine} />
                  <button className={styles.button} onClick={() => handleDelete(profile._id)}>delete</button>
                </div>
              </div>
            )
          })}
          <div className={`${styles.profile} ${styles.pointer}`}
               onClick={() => modal() }
          >
            <div className={styles.createBtn}>
              <div className={styles.vertical} />
              <div className={styles.horizontal} />
            </div>
            <p>Create new profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setProfiles,
  deleteProfile
};

const mapStateToProps = state => ({
  profiles: state.profiles.profiles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
