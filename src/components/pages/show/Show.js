import React, { Component } from 'react';
// import UserIntentModal from '../../user-intent/UserIntentBlankStateModal.js' //might use this

import Shows from '../../shows/Shows.js'

let showsData = [{}, {}, {}];

class ShowPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="content">
				<div className="show-page">
					<header>Show Page</header>
					<div>Show Data</div>
					<Shows shows={showsData} stacked={false} />
				</div>
			</div>
		);
	}
}

export default ShowPage;
