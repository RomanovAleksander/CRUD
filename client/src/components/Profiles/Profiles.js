import React, {useCallback, useContext, useEffect, useState} from "react";
import {ModalContext} from "../../context/ModalContext";
import styles from './Profiles.module.scss';
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

const Profiles = () => {
  const modal = useContext(ModalContext);
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = useCallback(async () => {
    try {
      const data = await request('/api/profile/', 'GET', null, {
        Authorization: `Bearer ${auth.token}`
      });
      setProfiles(data);
    } catch (e) {
      console.log(e.message)
    }
  }, [request])

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles])

  return (
    <div className={styles.container}>
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
                  <button className={styles.button}>delete</button>
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

export default Profiles;
