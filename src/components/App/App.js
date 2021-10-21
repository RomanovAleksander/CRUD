import { BrowserRouter as Router } from 'react-router-dom';
import {useRoutes} from "../../routes";
import {useAuth} from "../../hooks/auth.hook";
import {AuthContext} from "../../context/AuthContext";
import './App.css';
import Header from "../Header/Header";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, true, true)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        { isAuthenticated && <Header />}
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

