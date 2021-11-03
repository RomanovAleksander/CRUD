import styles from './Dashboard.module.scss';

const Dashboard = ({ users, profiles }) => {
  return (
    <div className={styles.container} data-testid="dashboard">
      <div className={styles.wrapper}>
        <div className={styles.pageTitle}>Dashboard:</div>
        <div className={styles.dashboard}>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Users:</p>
            <p className={styles.count} data-testid="users-length">{users.length}</p>
          </div>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Profiles:</p>
            <p className={styles.count}>{profiles.profiles.length}</p>
          </div>
          <div className={styles.dashboardItem}>
            <p className={styles.title}>Profiles over 18 years old:</p>
            <p className={styles.count}>{profiles.adults}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
