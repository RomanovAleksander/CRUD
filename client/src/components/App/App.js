import { BrowserRouter as Router } from 'react-router-dom';
import {useRoutes} from "../../routes";
import {useAuth} from "../../hooks/auth.hook";
import {AuthContext} from "../../context/AuthContext";
import Header from "../Header/Header";
import {Loader} from "../Loader/Loader";

function App() {
  const { token, login, logout, userId, isAdmin, username, loading, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, isAdmin, true);

  if (!ready || loading) {
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated, isAdmin
    }}>
      <Router>
        {isAuthenticated && <Header username={username}/>}
        {routes}
      </Router>

    </AuthContext.Provider>
  );
}

export default App;

