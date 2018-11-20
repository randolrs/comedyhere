import React, { Component } from 'react';
import UserIntentModal from '../../user-intent/UserIntentBlankStateModal.js'

import Shows from '../../shows/Shows.js'

class Home extends Component {
	constructor(props) {
		super(props);
	    let _showUserIntentModal = (this.props.userIntent === null);
	    this.state = {showUserIntentModal: _showUserIntentModal, typeOfShow: null, timeOfShow: null};
	    this.updateUserIntent = this.updateUserIntent.bind(this);
	}
	componentWillMount() {

  	}
  	componentDidMount() {

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
				
				<Shows />
			</div>
		);
	}
}

export default Home;
