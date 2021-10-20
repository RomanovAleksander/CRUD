import './App.css';
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Users from "../Users/Users";
import Profiles from "../Profiles/Profiles";
import LoginForm from '../LoginForm/LoginForm';

import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Redirect from="/"
                to="/signin"
                exact
      />
      <Route path="/signin" component={() => {
        return <LoginForm isSignIn={true} />
      }} />
      <Route path="/signup" component={() => {
        return <LoginForm isSignIn={false} />
      }} />
      <Route path="/dashboard" component={() => {
        return (
          <div className="container">
            <Header />
            <Dashboard />
          </div>
        )
      }} />
      <Route path="/users" component={() => {
        return (
          <div className="container">
            <Header />
            <Users />
          </div>
        )
      }} />
      <Route path="/profiles" component={() => {
        return (
          <div className="container">
            <Header />
            <Profiles />
          </div>
        )
      }} />
    </Switch>
  );
}

export default App;

