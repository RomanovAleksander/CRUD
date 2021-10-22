import React, {useContext} from "react";
import {ModalContext} from "../../context/ModalContext";
import styles from './Profiles.module.scss';

const Profiles = () => {
  const modal = useContext(ModalContext);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Profiles:</div>
        <div className={styles.contentWrapper}>
          <div className={styles.profile}>
            <p className={styles.title}>Danylo Bilyi</p>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
            <div className={styles.buttonsWrapper}>
              <button className={styles.button}>edit</button>
              <span className={styles.divingLine} />
              <button className={styles.button}>delete</button>
            </div>
          </div>
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
