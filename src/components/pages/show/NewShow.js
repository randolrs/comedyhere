import React, { Component } from 'react';
import axios from 'axios'

import Input from '../../forms/Input.js';

class NewShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newShow: {
				title: null,
				description: null,
				eventURL: null,
				venueName: null,
				address: null,
				videoPreview: null,
				videoDescription: null,
				reasonRecommend: null
			},
			saving: false
		}

		this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
		this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
		this.handleEventURLUpdate = this.handleEventURLUpdate.bind(this);
		this.handleVenueNameUpdate = this.handleVenueNameUpdate.bind(this);
		this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
		
		this.handleVideoPreviewUpdate = this.handleVideoPreviewUpdate.bind(this);
		this.handleVideoDescriptionUpdate = this.handleVideoDescriptionUpdate.bind(this);
		this.handleReasonRecommendUpdate = this.handleReasonRecommendUpdate.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit (e) {
		e.preventDefault();
		let self = this;
		// this.setState({saving: true});
		let _newShow = this.state.newShow;
		axios.post('https://comedyhere-server.herokuapp.com/api/shows/', _newShow).then(res => {
			alert('saved')
			// self.setState({saving: false});
		})
		.catch(e => {
			console.log(e)
			alert("error")
			// self.setState({saving: false});
		})

	}
	handleTitleUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ newShow : 
        	{...prevState.newShow, title: value}
      	}))
	}
	handleDescriptionUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ newShow : 
        	{...prevState.newShow, description: value}
      	}))
	}
	handleEventURLUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ newShow : 
        	{...prevState.newShow, eventURL: value}
      	}))
	}
	handleVenueNameUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ newShow : 
        	{...prevState.newShow, venueName: value}
      	}))
	}
	handleAddressUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ newShow : 
        	{...prevState.newShow, address: value}
      	}))
	}
	handleVideoPreviewUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ newShow : 
        	{...prevState.newShow, videoPreview: value}
      	}))
	}
	handleVideoDescriptionUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ newShow : 
        	{...prevState.newShow, videoDescription: value}
      	}))
	}
	handleReasonRecommendUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ newShow : 
        	{...prevState.newShow, reasonRecommend: value}
      	}))
	}
	render() {
		return (
			<div className="content">
				<div className="show-page">
					<header>New Show</header>
					<form onSubmit={this.handleSubmit}>
						<Input
							title={'Title'}
							name={'title'}
							type={'text'}
							value={this.state.title}
							handleChange={this.handleTitleUpdate}
						/>
						<Input
							title={'Description'}
							name={'description'}
							type={'text'}
							value={this.state.description}
							handleChange={this.handleDescriptionUpdate}
						/>
						<Input
							title={'Event URL'}
							name={'eventURL'}
							type={'text'}
							value={this.state.eventURL}
							handleChange={this.handleEventURLUpdate}
						/>
						<Input
							title={'Venue Name'}
							name={'venueName'}
							type={'text'}
							value={this.state.venueName}
							handleChange={this.handleVenueNameUpdate}
						/>
						<Input
							title={'Venue Address'}
							name={'address'}
							type={'text'}
							value={this.state.address}
							handleChange={this.handleAddressUpdate}
						/>

						<Input
							title={'Video Preview'}
							name={'videoPreview'}
							type={'text'}
							value={this.state.videoPreview}
							handleChange={this.handleVideoPreviewUpdate}
						/>
						<Input
							title={'Video Description'}
							name={'videoDescription'}
							type={'text'}
							value={this.state.videoDescription}
							handleChange={this.handleVideoDescriptionUpdate}
						/>
						<Input
							title={'Reason We Recommend'}
							name={'reasonRecommend'}
							type={'text'}
							value={this.state.reasonRecommend}
							handleChange={this.handleReasonRecommendUpdate}
						/>
						<button className="btn" onClick={this.handleSubmit}>Add Show</button>
					</form>
					<div>New Show Form</div>
				</div>
			</div>
		);
	}
}

export default NewShow;
