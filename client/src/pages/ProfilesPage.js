import Profiles from "../components/Profiles/Profiles";
import ModalForm from "../components/ModalForm/ModalForm";
import {connect} from "react-redux";

const ProfilesPage = ({ isOpen }) => {
  return (
    <>
      { isOpen && <ModalForm /> }
      <Profiles />
    </>
  )
}

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen
});

export default connect(mapStateToProps)(ProfilesPage);
