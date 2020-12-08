import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

<<<<<<< HEAD
import Login from './pages/Login';
import Main from './pages/Main'
import Home from './pages/Home'
import Employee from './pages/Employee'
import Vaction from './pages/Vaction'
import Payslip from './pages/Payslip'
import PunchIn from './pages/PunchIn'

import CredentialManager from './common/Auth/CredentialsManager'

import './style.css'


function RequireAuth(PageToRender) {
  return CredentialManager.userIsAuthenticated() ? (
    <Main>
      <PageToRender />
    </Main>
  ) : (
      <Redirect to="/authentication" />
    )
}

function NoAuth(PageToRender) {
  CredentialManager.logout()
  return (
    <PageToRender />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => NoAuth(Login)} />
        <Route exact path="/home" render={() => RequireAuth(Home)} />
        <Route exact path="/user" render={() => RequireAuth(Employee)} />
        <Route exact path="/payslip" render={() => RequireAuth(Payslip)} />
        <Route exact path="/punch-in" render={() => RequireAuth(PunchIn)} />
        <Route exact path="/vaction" render={() => RequireAuth(Vaction)} />
        <Route exact path="/authentication" render={() => NoAuth(Login)} />
      </Switch>
    </BrowserRouter>
=======
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> ad1edf2666316ad6594b098bd786dadc0eacf29a
  </React.StrictMode>,
  document.getElementById("root")
);
