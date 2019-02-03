import React, { Component } from 'react';

//redux things
import {bindActionCreators} from 'redux';
import * as actions from './redux/actions/actions.js';

//styles
import './styles/main.sass';

//import layout components
import Nav from './components/layouts/Nav.js';
import Footer from './components/layouts/Footer.js';
import ScrollToTop from './components/layouts/ScrollToTop.js';

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/pages/home/Home.js';
import ShowPage from './components/pages/show/Show.js';
import NewShow from './components/pages/show/NewShow.js';
import IndexShows from './components/pages/show/IndexShows.js';
import Search from './components/pages/search/Search.js';
import About from './components/pages/about/About.js';
import Missing from './components/missing/Missing.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { renewSession } = this.props.auth;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  toggleSidenav() {
    // this.props.layout.sideOpen ? this.props.actions.closeSidenav() : this.props.actions.openSidenav();
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Nav
          toggleSidenav={this.toggleSidenav}
          isAuthenticated={ isAuthenticated }
        />
        <div className="main">
          {
            !isAuthenticated() &&
            <div>
              <button onClick={ this.login }> Login</button>
            </div>
          }

          {
            isAuthenticated() &&
            <div>
              <button onClick={ this.logout }>Logout</button>
            </div>
          }
        </div>
        <Footer />
      </div>
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

export default App;
