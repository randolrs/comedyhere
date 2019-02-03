import React, { Component } from 'react';
import styled from 'styled-components';
import Auth from '../../auth/Auth.js';

//redux things
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions/actions.js';


class LoginButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		this.initiateLogin = this.initiateLogin.bind(this);
	}
	componentDidMount() {
	}

	initiateLogin() {
		console.log('login');
		// Auth.login();
		return;
	}

	render() {
		return (
			<button onClick={this.initiateLogin}>
				<span>Login</span>
			</button>
		);
	}
}

// export default LoginButton;

const mapStateToProps = state => ({
 ...state
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default LoginButton;
