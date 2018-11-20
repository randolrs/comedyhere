import React, { Component } from 'react';

import typesOfShows from './data/typesOfShows.js'
import timesOfShows from './data/timesOfShows.js'

import SelectButtonGroup from '../forms/SelectButtonGroup.js'

class UserIntentModal extends Component {
	constructor(props) {
		super(props);
		this.state = {typeOfShow: null, timeOfShow: null};
    this.updateShowType = this.updateShowType.bind(this);
    this.updateShowTime = this.updateShowTime.bind(this);
	}
  updateShowType(showType) {
    this.setState({typeOfShow: showType});
  }
  updateShowTime(showTime) {
    this.setState({timeOfShow: showTime});
  }
  updateUserIntent() {
    
  }
  render() {
    return (
      <div className="modal white">
      	<div className="modal__content centered">
          <div>
            <span className="modal__content__header">Welcome to ComedyHere</span>
          </div>
      		<div className="form-group">
      			<label>What kind of shows are you looking for?</label>
      			<div>
              <SelectButtonGroup options={typesOfShows} handleUpdate={this.updateShowType} value={this.state.typeOfShow} />
      			</div>
      		</div>
      		<div className="form-group">
      			<label>When?</label>
      			<SelectButtonGroup options={timesOfShows} handleUpdate={this.updateShowTime} value={this.state.timeOfShow}/>
      		</div>
          <div className="form-group">
            <button className="btn" onClick={()=>this.props.updateUserIntent(this.state)}>Find Comedy Shows</button>
          </div>
      		<div className="centered">
      			<a>I want to add my show</a>
      		</div>
      	</div>
      </div>
    );
  }
}

export default UserIntentModal;
