import {connect} from 'react-redux';
import Profiles from '../components/Profiles/Profiles';
import ModalForm from '../components/ModalForm/ModalForm';
import UserDetail from '../components/UserDetail/UserDetail';

const UserDetailPage = ({ isOpen, isUser }) => {
  return (
    <>
      { isOpen && <ModalForm isUser={isUser} /> }
      <UserDetail/>
      <Profiles />
    </>
  )
}

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  isUser: state.user.isUser
});

export default connect(mapStateToProps)(UserDetailPage);
