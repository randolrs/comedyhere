import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectButtonGroup extends Component {
	constructor(props) {
		super(props);
		// this.state = {typeOfShow: null, timeOfShow: null};
	}
	updateValue(value) {
		alert(value)
		this.props.handleUpdate(value);
	}
	render() {
		return (
			<div>
				{
					this.props.options.map((elem, index) => {
						return <span className={"select-button" + (this.props.value === elem.value ? ' active': '')} onClick={()=>this.props.handleUpdate(elem.value)}  key={index}>{elem.label}</span>
					}) 
				}
			</div>
		);
	}
}

SelectButtonGroup.propTypes = {
  options: PropTypes.array,
  handleUpdate: PropTypes.func
};

export default SelectButtonGroup;
