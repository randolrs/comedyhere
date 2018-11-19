import React, { Component } from 'react';

//router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//redux things
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';
import * as actions from './redux/actions/actions.js';

//styles
import './styles/main.sass';

//import layout components
import Nav from './components/layouts/Nav.js';
import Footer from './components/layouts/Footer.js';
import ScrollToTop from './components/layouts/ScrollToTop.js';

//Router
import routes from './router/routes.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSidenav = this.toggleSidenav.bind(this);
  }
  componentDidUpdate() {

  }
  toggleSidenav() {
    this.props.layout.sideOpen ? this.props.actions.closeSidenav() : this.props.actions.openSidenav();
  }
  routerUpdate() {
    alert('routerUpdate')
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Router onUpdate={() => {this.routerUpdate()}}>
        <ScrollToTop>
          <div className={"App" + (this.props.layout.sideOpen ? ' sideOpen' : '')}>
            <Nav sideOpen={this.props.layout.sideOpen} toggleSidenav={this.toggleSidenav} />
            <div className="main">
              <span>Action</span>
              {routes}
            </div>
            <Footer />
          </div>
        </ScrollToTop>
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
