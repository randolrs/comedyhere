import React, { Component } from 'react';
import Shows from '../../shows/Shows.js'

let showsData = [{}, {}, {}];

class IndexShows extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="content">
				<div className="show-page">
					<header>Index Shows</header>
					<Shows shows={showsData} stacked={true}/>
				</div>
			</div>
		);
	}
}

export default IndexShows;
