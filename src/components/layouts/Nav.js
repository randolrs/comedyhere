import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		  <nav className="nav">
		  	
				<div className="nav__left">
				<span className="nav__link" onClick={this.props.toggleSidenav}>
					<span>Toggle</span>
				</span>
					<Link to="/" className="nav__link">
						<span>Nav</span>
					</Link>
				</div>
				<div className="nav__right">
					<Link to="/about" className="nav__link">
						<span>About</span>
					</Link>
				</div>

		  </nav>
		);
	}
}

export default Nav;
