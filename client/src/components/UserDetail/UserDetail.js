import React, {useCallback, useContext, useEffect} from 'react';
import styles from "./UserDetail.module.scss";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

import {setUser, changeUser} from '../../actions/users/actions';
import {connect} from "react-redux";
import {toggleForm} from "../../actions/modal/actions";

import edit from '../../assets/edit.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

const UserDetail = ({ user, setUser, changeUser, toggleForm, loadingState }) => {
  const {request, loading} = useHttp();
  const {token} = useContext(AuthContext);
  const userId = useParams().id;
  const auth = useContext(AuthContext);

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

  const fetchUser = useCallback(async () => {
    try {
      const data = await request(`/api/user/${userId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setUser(data);
    } catch (e) {
      console.log(e.message)
    }
  }, [request, token, userId, setUser])

  const fetchUserDelete = useCallback(async () => {
    try {
      const data = await request(`/api/user/delete`, 'DELETE', {userId: userId}, {
        Authorization: `Bearer ${token}`
      });
      if (data.id === userId) auth.logout();
      showToast(data.message, 'success');
    } catch (e) {}
  }, [request, token, userId, auth])

  useEffect(() => {
    if (!loadingState) fetchUser();
  }, [fetchUser, loadingState])

  const handleDelete = () => {
    fetchUserDelete();
  }

  const handleEdit = () => {
    toggleForm()
    changeUser()
  }


  return (
    <div className={styles.container}>
      <ToastContainer />
      {!loading && user && (
        <div className={styles.wrapper}>
          <div className={styles.userTitle}>{user.username}</div>
          <div className={styles.userTitle}>{user.email}</div>
          <div className={styles.role}>{user.isAdmin ? 'admin' : 'user'}</div>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button}
                    onClick={handleEdit}
                    style={{
                      backgroundImage: `url(${edit})`
                    }}
            />
            <button className={styles.button}
                    onClick={handleDelete}
                    style={{
                      backgroundImage: `url(${deleteIcon})`
                    }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

const mapDispatchToProps = {
  setUser,
  changeUser,
  toggleForm
};

const mapStateToProps = state => ({
  user: state.user.user,
  loadingState: state.user.loadingState
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
