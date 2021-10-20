import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="page-title">Dashboard:</div>
      <div className="dashboard-info">
        <div className="dashboard-info__block">
          <p className="block-title">Users:</p>
          <p className="block-count">13</p>
        </div>
        <div className="dashboard-info__block">
          <p className="block-title">Profiles:</p>
          <p className="block-count">27</p>
        </div>
        <div className="dashboard-info__block">
          <p className="block-title">Profiles over 18 years old:</p>
          <p className="block-count">20</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
