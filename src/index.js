import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main'
import Home from './pages/Home'
import Users from './pages/Users'
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
        <Route exact path="/user" render={() => RequireAuth(Users)} />
        <Route exact path="/payslip" render={() => RequireAuth(Payslip)} />
        <Route exact path="/punch-in" render={() => RequireAuth(PunchIn)} />
        <Route exact path="/vaction" render={() => RequireAuth(Vaction)} />
        <Route exact path="/authentication" render={() => NoAuth(Login)} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

