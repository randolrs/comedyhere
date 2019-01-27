import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

import CurrentLocation from './CurrentLocation.js';
import Location from './Location.js';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Location
        centerAroundCurrentLocation
        google={this.props.google}
        initialCenter={this.props.initialCenter}
        currentLocation={this.props.initialCenter}
      >
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Location>
    );
  }
}

GoogleApiWrapper.propTypes = {
  zoom: PropTypes.number,
  initialCenter: {
    lat: PropTypes.number,
    lng: PropTypes.number
  },
  centerAroundCurrentLocation: PropTypes.boolean,
  visible: PropTypes.boolean
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD113QVJfy_GUKNjqjxvtvSDw21HEWtMUk'
})(MapContainer);
