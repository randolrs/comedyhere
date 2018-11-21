import React, { Component } from 'react';
import axios from 'axios'
import Shows from '../../shows/Shows.js'

let showsData = [{}, {}, {}];

class ShowPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: null,
			loadPending: true
		}
	}
	componentDidMount() {
		let _showId = this.props.match.params.showId;
		alert(_showId);
		axios.get('https://comedyhere-server.herokuapp.com/api/shows/' + _showId, { crossdomain: true }).then(res => {
			// console.log(res);
			this.setState({show: res.data, loadPending: false})
		})
		.catch(e => {
			console.log(e)
			alert("error")
			this.setState({loadPending: false})
		})
	}
	render() {
		return (
			<div className="content">
				<div className="show-page">
				{
					this.state.loadPending ? 
						<span>Loading</span>
						: <span>Show Loaded</span>
				}
					<header>Show Page</header>
					<div>Show Data</div>
					<Shows shows={showsData} stacked={false} />
				</div>
			</div>
		);
	}
}

export default ShowPage;
