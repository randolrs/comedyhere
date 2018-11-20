import React, { Component } from 'react';
// import UserIntentModal from '../../user-intent/UserIntentBlankStateModal.js' //might use this

import Shows from '../../shows/Shows.js'
import SearchFilter from './SearchFilter.js'

let showsData = [{}, {}, {}];

class Search extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {

  	}
  	componentDidMount() {

  	}

	render() {
		return (
			<div className="content">
				<div className="search">
					<header>Search</header>
					<SearchFilter />
					<div className="search__results">
						<div className="search__results__shows">
							<Shows shows={showsData} stacked={true}/>
						</div>
						<div className="search__results__map">
							<div className="map">map</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
