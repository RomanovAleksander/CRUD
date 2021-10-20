import './profiles.css';

const Profiles = () => {
  return (
    <div className="content-wrapper">
      <div className="page-title">Users:</div>
      <div className="profiles-info">
        <div className="profiles-info__block">
          <p className="profile-title">Danylo Bilyi</p>
          <p className="profile-male p-t">male</p>
          <p className="profile-birth-date p-t">25.03.2003</p>
          <p className="profile-city p-t">Kyiv</p>
          <div className="card-buttons">
            <button className="edit btn">edit</button>
            <span className="diving-line" />
            <button className="delete btn">delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles;
