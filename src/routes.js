import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Users from "./pages/Users";

import CredentialManager from "./common/Auth/CredentialsManager";

const Routes = () => {
  function RequireAuth(PageToRender) {
    return CredentialManager.userIsAuthenticated() ? (
      <Main>
        <PageToRender />
      </Main>
    ) : (
      <Redirect to="/authentication" />
    );
  }

  function NoAuth(PageToRender) {
    CredentialManager.logout();
    return <PageToRender />;
  }

  return (
    <Switch>
      <Route exact path="/" render={() => NoAuth(Login)} />
      <Route exact path="/home" render={() => RequireAuth(Home)} />
      <Route exact path="/users" render={() => RequireAuth(Users)} />

      <Route exact path="/authentication" render={() => NoAuth(Login)} />
    </Switch>
  );
};

export default Routes;
