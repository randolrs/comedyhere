import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Show(props) {
	let uuid = props.show.slug ? props.show.slug : props.show._id;
	let deleteShow = () => {
		alert('deleting' + uuid);
		axios.delete('https://comedyhere-server.herokuapp.com/api/shows/' + uuid, { crossdomain: true }).then(res => {
			// console.log(res);
			// this.setState({show: res.data, loadPending: false})
		})
		.catch(e => {
			console.log(e)
			alert("error")
			// this.setState({loadPending: false})
		})
	}
	let showImg = props.show.image ? <img src={props.show.image} alt={props.show.name} /> : <div className="show__content__img">665</div>;

	return (
		<div className={'show' + (props.stacked ? ' stacked' : '')}>
			<div className="show__content">
				<Link to={'/show/' + uuid} className="clear-link">
					{showImg}
				</Link>
				<div className="show__content__data">
					<Link to={'/show/' + uuid} className="clear-link">
						<span>{props.show.title}</span>
					</Link>
					<Link to={'/show/edit/' + uuid} className="clear-link">
						<span>Edit</span>
					</Link>
					<span onClick={deleteShow}>Delete</span>
				</div>
			</div>
		</div>
	);
}

export default Show;
