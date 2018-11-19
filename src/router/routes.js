import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from '../components/pages/home/Home.js'
import About from '../components/pages/about/About.js'
import Missing from '../components/missing/Missing.js'

const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={Missing} />
    </Switch>
)

export default routes;