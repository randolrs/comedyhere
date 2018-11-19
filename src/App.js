import React, { Component } from 'react';

//router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//redux things
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';
import * as actions from './redux/actions/actions.js';

import './styles/main.sass';
import Nav from './components/layouts/Nav.js';
import Footer from './components/layouts/Footer.js';

//Router
import routes from './router/routes.js'

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <Nav sideOpen={this.props.stuff.sideOpen} />
          <div className="main">
            <span onClick={this.props.actions.fetchStuff }>Action</span>
            {routes}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
 ...state
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
