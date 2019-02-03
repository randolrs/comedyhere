// Load Auth0 SDK
import auth0 from 'auth0-js';
// // Initialize SDK using the settings from the Dashboard
// const webAuth = new auth0.WebAuth({
//   // Auth0 Domain
//   domain: 'comedy.auth0.com',
//   // SPA settings
//   clientID: 'Sc0y16V5iitRkE5KcwCknkmE2TEW53gz',
//   redirectUri: 'https://localhost:3001/callback',
//   // API settings
//   audience: 'https://comedy.auth0.com/api/v2/',
//   responseType: 'token id_token',
// });
//
// export default webAuth;

import history from '../history/history.js';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    // Auth0 Domain
    domain: 'comedy.auth0.com',
    // SPA settings
    clientID: 'Sc0y16V5iitRkE5KcwCknkmE2TEW53gz',
    redirectUri: 'http://localhost:3001/callback',
    // API settings
    audience: 'https://comedy.auth0.com/api/v2/',
    responseType: 'token id_token',
  });

  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/error');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    history.replace('/home');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    console.log('isAuthenticated() expiresAt:', expiresAt);
    return new Date().getTime() < expiresAt;
  }
}
