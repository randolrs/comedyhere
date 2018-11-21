import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import axios from 'axios'

class Show extends Component {
	constructor(props) {
		super(props);
		let uuid = props.show.slug ? props.show.slug : props.show._id;
	
		this.state = {
			deleted: false,
			uuid: uuid
		}

		this.deleteShow	= this.deleteShow.bind(this);
	}
	deleteShow () {
		alert('delete')
		axios.delete('https://comedyhere-server.herokuapp.com/api/shows/' + this.state.uuid, { crossdomain: true }).then(res => {
			// console.log(res);
			this.setState({deleted: true})
		})
		.catch(e => {
			console.log(e)
			alert("error")
			// this.setState({loadPending: false})
		})
	}
	render() {
		return (
				<div className={'show' + (this.props.stacked ? ' stacked' : '') + (this.state.deleted ? ' removed' : '')}>
					<div className="show__content">
						<Link to={'/show/' + this.state.uuid} className="clear-link">
							<div className="show__content__img">img</div>
						</Link>
						<div className="show__content__data">
							<Link to={'/show/' + this.state.uuid} className="clear-link">
								<span>{this.props.show.title}</span>
							</Link>
							<Link to={'/show/edit/' + this.state.uuid} className="clear-link">
								<span>Edit</span>
							</Link>
							<span onClick={this.deleteShow}>Delete</span>
						</div>
					</div>
				</div>		
		);
	}
}

export default Show;
