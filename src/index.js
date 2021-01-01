import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

import Login from './pages/Login';
import Main from './pages/Main'
import Home from './pages/Home'
import Product from './pages/Product'
import Client from './pages/Client'
import PurchaseOrder from './pages/PurchaseOrder'
import SalesOrder from './pages/SalesOrder'

import CredentialManager from './common/Auth/CredentialsManager'

import './global.css'

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
        <Route exact path="/product" render={() => RequireAuth(Product)} />
        <Route exact path="/client" render={() => RequireAuth(Client)} />
        <Route exact path="/purchase-order" render={() => RequireAuth(PurchaseOrder)} />
        <Route exact path="/sales-order" render={() => RequireAuth(SalesOrder)} />
        <Route exact path="/authentication" render={() => NoAuth(Login)} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
