import {Switch, Route, Redirect} from'react-router-dom';
import {UsersPage} from './pages/UsersPage';
import ProfilesPage from './pages/ProfilesPage';
import {AuthPage} from './pages/AuthPage';
import {DashboardPage} from './pages/DashboardPage';
import UserDetailPage from './pages/UserDetailPage';

export const useRoutes = (isAuthenticated, isAdmin, isSignIn) => {
  if (isAuthenticated && !isAdmin) {
    return (
      <Switch>
        <Route path="/profiles" exact>
          <ProfilesPage />
        </Route>
        <Redirect to="/profiles" />
      </Switch>
    )
  }

  if (isAuthenticated && isAdmin) {
    return (
      <Switch>
        <Route path="/profiles" exact>
          <ProfilesPage />
        </Route>
        <Route path="/users" exact>
          <UsersPage />
        </Route>
        <Route path="/dashboard" exact>
          <DashboardPage />
        </Route>
        <Route path="/user/:id">
          <UserDetailPage isAdmin={isAdmin}/>
        </Route>
        <Redirect to="/profiles" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage isSignIn={isSignIn}/>
      </Route>
      <Route path="/signup" exact>
        <AuthPage isSignIn={false}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
