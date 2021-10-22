import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Dashboard:</div>
        <div className={styles.dashboard}>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Users:</p>
            <p className={styles.count}>13</p>
          </div>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Profiles:</p>
            <p className={styles.count}>27</p>
          </div>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Profiles over 18 years old:</p>
            <p className={styles.count}>20</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
