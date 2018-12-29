import React, { Component } from 'react';
import axios from 'axios';
import Shows from '../../shows/Shows.js';
import GoogleApiWrapper from '../../maps/GoogleApiWrapper.js';
import styled from 'styled-components';

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
		let image = this.state.show && this.state.show.image ?
			<div className="show-page__img" style={{ backgroundImage: "url(" + this.state.show.image + ")" }}></div>
			: <div className="show-page__img">img</div>;
		return (
			<div className="content">
				<div className="show-page">
				{
					this.state.loadPending ?
						<span>Loading</span> :
					this.state.show ?
						<div>
							{image}
							<section className="content__section">
								<header className="content__page-header">{this.state.show.title}</header>
								{
									this.state.show.description ?
									<div>
										<p>{this.state.show.description}</p>
									</div> :
									null
								}
								<div>
									<span>Date/Time info</span>
								</div>
								<div>
									<span>Baisc Location Information</span>
									<MapWrapper>
										<GoogleApiWrapper />
									</MapWrapper>
								</div>
								<div>
									<span>Price</span>
									<span>Type of show</span>
									<span>in XYYZZ neighborhood</span>
								</div>
								<div>
									<span>Perfect for:</span>
									<span>Elise</span>
									<span>[Tags]</span>
								</div>
								<div>
									<span>Who performs here?</span>
									<span>A new performer model</span>
								</div>
							</section>
							<section className="content__section">
								<header>What comedy fans have to say about this show:</header>
								<span>A V2 feature for sure</span>
							</section>
							<section className="content__section">
								<header>Related Shows</header>
								<Shows shows={showsData} stacked={false} />
							</section>
						</div>
					:
						<span>Show not found</span>
				}
				</div>
			</div>
		);
	}
}

const MapWrapper = styled.div`
		  position: relative;
			width: 100%;
			height: 200px;
`;



export default ShowPage;
