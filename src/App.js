import React, {Fragment} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login'
import Main from './pages/Main'

import './style.css'

function App() {
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" component={Main} />
            </Switch>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
