import React, { Component } from 'react';
import axios from 'axios'

import UserIntentModal from '../../user-intent/UserIntentBlankStateModal.js'

import Shows from '../../shows/Shows.js'

let showsData = [{}, {}, {}];

class Home extends Component {
	constructor(props) {
		super(props);
	    let _showUserIntentModal = (this.props.userIntent === null);
	    this.state = {showUserIntentModal: _showUserIntentModal, typeOfShow: null, timeOfShow: null, shows: []};
	    this.updateUserIntent = this.updateUserIntent.bind(this);
	}
	componentDidMount() {
		axios.get('https://comedyhere-server.herokuapp.com/api/shows/', { crossdomain: true }).then(res => {
			console.log(res)
			this.setState({shows: res.data})
		})
		.catch(e => {
			console.log(e)
			alert("error")
			this.setState({loadPending: false})
		})
	}
  	async updateUserIntent(query) {
  		console.log(query);
  		await this.setState(query);
  		await this.setState({showUserIntentModal: false});
  	}
	render() {
		return (
			<div className="content">
				<span>Home</span>
				{
					this.state.showUserIntentModal ? <UserIntentModal updateUserIntent={this.updateUserIntent} /> : null
				}
				{
					(this.state.shows && this.state.shows.length > 0) ?
					<Shows shows={this.state.shows} stacked={true}/>
					: <span>Loading</span>
				}
				
			</div>
		);
	}
}

export default Home;
