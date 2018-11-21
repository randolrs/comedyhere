import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (  
		<div className="form-group">
			<label htmlFor={props.name} className="form-label">{props.title}</label>
			<input
				className="form-input"
				id={props.name}
				name={props.name}
				type={props.type}
				value={props.value}
				onChange={props.handleChange}
				placeholder={props.placeholder} 
			/>
		</div>
	)
}

Input.propTypes = {
  name: PropTypes.string,
  title: PropTypes.title
};

export default Input;



