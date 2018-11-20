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
					<Link to="/" className="nav__link clear-link">
						<span>ComedyHere</span>
					</Link>
				</div>
				<div className="nav__right">
					<Link to="/shows/list" className="nav__link">
						<span>My Shows</span>
					</Link>
					<Link to="/show/new" className="nav__link">
						<span>Add a Show</span>
					</Link>
				</div>

		  </nav>
		);
	}
}

export default Nav;
