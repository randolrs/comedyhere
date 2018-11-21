import React, { Component } from 'react';
import axios from 'axios'

import Input from '../../forms/Input.js';

class NewShow extends Component {
	constructor(props) {
		super(props);
		let editMode = this.props.match.params.showId ? true : false;
		this.state = {
			showParams: {
				title: '',
				description: '',
				eventURL: '',
				venueName: '',
				address: '',
				videoPreview: '',
				videoDescription: '',
				reasonRecommend: ''
			},
			saving: false,
			editMode: editMode,
			ready: !editMode //need to get editable show params still
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

	async componentDidMount() {
		if(this.state.editMode) {
			let _showId = this.props.match.params.showId;
			await axios.get('https://comedyhere-server.herokuapp.com/api/shows/' + _showId, { crossdomain: true }).then(res => {
				// this.setState({show: res.data})
				console.log(res.data)
				this.setState( prevState => ({ showParams: 
        			{...res.data}
      			}))
      			this.setState({ready: true});
			})
			.catch(e => {
				console.log(e)
				alert("error")
				this.setState({loadPending: false})
			})
		}
		
	}
	handleSubmit (e) {
		e.preventDefault();
		let self = this;
		// this.setState({saving: true});
		let _showParams = this.state.showParams;

		if(this.state.editMode) {
			let _showId = this.props.match.params.showId;
			axios.patch('https://comedyhere-server.herokuapp.com/api/shows/' + _showId, _showParams).then(res => {
				console.log(res)
				alert('updated')
				// self.setState({saving: false});
			})
			.catch(e => {
				console.log(e.response)
				alert("error")
				// self.setState({saving: false});
			})
		} else {
			axios.post('https://comedyhere-server.herokuapp.com/api/shows/', _showParams).then(res => {
				alert('saved')
				// self.setState({saving: false});
			})
			.catch(e => {
				console.log(e)
				alert("error")
				// self.setState({saving: false});
			})
		}
	}
	handleTitleUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ showParams : 
        	{...prevState.showParams, title: value}
      	}))
	}
	handleDescriptionUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ showParams : 
        	{...prevState.showParams, description: value}
      	}))
	}
	handleEventURLUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ showParams : 
        	{...prevState.showParams, eventURL: value}
      	}))
	}
	handleVenueNameUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ showParams : 
        	{...prevState.showParams, venueName: value}
      	}))
	}
	handleAddressUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ showParams : 
        	{...prevState.showParams, address: value}
      	}))
	}
	handleVideoPreviewUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ showParams : 
        	{...prevState.showParams, videoPreview: value}
      	}))
	}
	handleVideoDescriptionUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ showParams : 
        	{...prevState.showParams, videoDescription: value}
      	}))
	}
	handleReasonRecommendUpdate(e) {
		let value = e.target.value;
		this.setState( prevState => ({ showParams : 
        	{...prevState.showParams, reasonRecommend: value}
      	}))
	}
	render() {
		return (
			<div className="content">
				<div className="show-page">
					<header>New Show</header>
					{
						this.state.ready ? 
						<form onSubmit={this.handleSubmit}>
							<Input
								title={'Title'}
								name={'title'}
								type={'text'}
								value={this.state.showParams.title || ''}
								handleChange={this.handleTitleUpdate}
							/>
							<Input
								title={'Description'}
								name={'description'}
								type={'text'}
								value={this.state.showParams.description || ''}
								handleChange={this.handleDescriptionUpdate}
							/>
							<Input
								title={'Event URL'}
								name={'eventURL'}
								type={'text'}
								value={this.state.showParams.eventURL || ''}
								handleChange={this.handleEventURLUpdate}
							/>
							<Input
								title={'Venue Name'}
								name={'venueName'}
								type={'text'}
								value={this.state.showParams.venueName || ''}
								handleChange={this.handleVenueNameUpdate}
							/>
							<Input
								title={'Venue Address'}
								name={'address'}
								type={'text'}
								value={this.state.showParams.address || ''}
								handleChange={this.handleAddressUpdate}
							/>

							<Input
								title={'Video Preview'}
								name={'videoPreview'}
								type={'text'}
								value={this.state.showParams.videoPreview || ''}
								handleChange={this.handleVideoPreviewUpdate}
							/>
							<Input
								title={'Video Description'}
								name={'videoDescription'}
								type={'text'}
								value={this.state.showParams.videoDescription || ''}
								handleChange={this.handleVideoDescriptionUpdate}
							/>
							<Input
								title={'Reason We Recommend'}
								name={'reasonRecommend'}
								type={'text'}
								value={this.state.showParams.reasonRecommend || ''}
								handleChange={this.handleReasonRecommendUpdate}
							/>
							<button className="btn" onClick={this.handleSubmit}>
								{
									this.state.editMode ? 'Update Show' : 'Add Show'
								}
							</button>
						</form>
						: null
					}
					<div>New Show Form</div>
				</div>
			</div>
		);
	}
}

export default NewShow;
