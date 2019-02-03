import React from 'react';
import Auth from '../auth/Auth.js';

import { Router, Route, Switch } from "react-router-dom";

import App from '../App.js';
import Home from '../components/pages/home/Home.js';
import About from '../components/pages/about/About.js';
import ShowPage from '../components/pages/show/Show.js';
import NewShow from '../components/pages/show/NewShow.js';
import IndexShows from '../components/pages/show/IndexShows.js';
import Search from '../components/pages/search/Search.js';
import Missing from '../components/missing/Missing.js';

import Callback from '../components/auth/Callback.js';

import history from '../history/history.js';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  console.log('handleAuthentication');

  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const routes = (
  <Router history={history} component={App}>
    <div>
      <Route path="/" render={(props) => <App auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
      }}/>
      <Route path="*" component={Missing} />
    </div>
  </Router>
)

export default routes;
