import { BrowserRouter as Router } from 'react-router-dom';
import {useRoutes} from "../../routes";
import {useAuth} from "../../hooks/auth.hook";
import {AuthContext} from "../../context/AuthContext";
import {ModalContext} from "../../context/ModalContext";
import Header from "../Header/Header";
import {useState} from "react";

function App() {
  const { token, login, logout, userId, isAdmin } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, isAdmin, true);

  const [modalData, setModalData] = useState({
    isOpen: false,
  });

  const toggle = () => {
    setModalData((prevState) => {
      return {isOpen: !prevState.isOpen}
    });
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated, isAdmin
    }}>
      <ModalContext.Provider value={toggle}>
        <Router>
          { modalData.isOpen && <div>Open MODAL</div>}
          { isAuthenticated && <Header />}
          {routes}
        </Router>
      </ModalContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

