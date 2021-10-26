import Profiles from "../components/Profiles/Profiles";
import ModalForm from "../components/ModalForm/ModalForm";
import {connect} from "react-redux";
import {UserDetail} from "../components/UserDetail/UserDetail";

const UserDetailPage = ({ isOpen }) => {
  return (
    <>
      { isOpen && <ModalForm /> }
      <UserDetail />
      <Profiles />
    </>
  )
}

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen
});

export default connect(mapStateToProps)(UserDetailPage);
