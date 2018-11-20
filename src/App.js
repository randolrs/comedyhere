import React, { Component } from 'react';

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
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './components/pages/home/Home.js'
import ShowPage from './components/pages/show/Show.js'
import Search from './components/pages/search/Search.js'
import About from './components/pages/about/About.js'
import Missing from './components/missing/Missing.js'

class App extends Component {
  constructor(props) {
    super(props);
    // let _showUserIntentModal = (this.props.layout.userIntent === null);
    // this.state = {date: new Date(), showUserIntentModal: _showUserIntentModal};
    
    this.toggleSidenav = this.toggleSidenav.bind(this);

  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  toggleSidenav() {
    this.props.layout.sideOpen ? this.props.actions.closeSidenav() : this.props.actions.openSidenav();
  }
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className={"App" + (this.props.layout.sideOpen ? ' sideOpen' : '')}>
            <Nav sideOpen={this.props.layout.sideOpen} toggleSidenav={this.toggleSidenav} />
            <div className="main">
              <span>Action</span>
              <Switch>
                <Route path="/" 
                  exact 
                  render={(props) => <Home {...props} userIntent={this.props.layout.userIntent} />}
                 userIntent={this.props.layout.userIntent} />
                <Route path="/search/:searchArea" component={Search} />
                <Route path="/show/:showId" component={ShowPage} />
                <Route path="/about" component={About} />
                <Route path="*" component={Missing} />
              </Switch>
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
