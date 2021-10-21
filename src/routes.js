import {Switch, Route, Redirect} from "react-router-dom";
import {UsersPage} from "./pages/UsersPage";
import {ProfilesPage} from "./pages/ProfilesPage";
import {AuthPage} from "./pages/AuthPage";
import {DashboardPage} from "./pages/DashboardPage";

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
        <Redirect to="/users" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage isSignIn={isSignIn}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
