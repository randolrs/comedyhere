import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {
        lat: this.props.currentLocation.lat,
        lng: this.props.currentLocation.lng
      }
    };

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    if (prevProps.google !== this.props.google) {
      this.loadMap();
      this.recenterMap();
    }

    if (prevState.currentLocation !== this.state.currentLocation) {
      this.loadMap();
      this.recenterMap();
    }
  }

  recenterMap() {
   const map = this.map;
   const current = this.state.currentLocation;

   const google = this.props.google;
   const maps = google.maps;

   if (map) {
     let center = new maps.LatLng(current.lat, current.lng);
     map.panTo(center);
   }
 }

 componentDidMount() {
   if (this.props.centerAroundCurrentLocation && this.props.currentLocation.lat && this.props.currentLocation.lng) {
     this.setState({
       currentLocation: {
         lat: this.props.currentLocation.lat,
         lng: this.props.currentLocation.lng
       }
     });
   }

   console.log('componentDidMount')
   this.loadMap();
   // this.recenterMap();
 }

 loadMap() {
   console.log('loadMap');
   console.log(this.props.currentLocation);

    if (this.props && this.props.google) {
      console.log('do google stuff')
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.props.currentLocation;
      const center = new maps.LatLng(lat, lng);
      console.log(center);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );

      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);

      var marker = new google.maps.Marker();
      marker.setPosition(new google.maps.LatLng(lat, lng));
      marker.setMap(this.map);
    }
  }

  renderChildren() {
   const { children } = this.props;

   if (!children) return;
   console.log('render children')
   return React.Children.map(children, c => {
     if (!c) return;
     return React.cloneElement(c, {
       map: this.map,
       google: this.props.google,
       mapCenter: this.props.currentLocation
     });
   });
 }

 render() {
    const style = Object.assign({}, mapStyles.map);
    return (
      <div>
        <div style={style} ref="map">
          Loading map...
        </div>
        {
          this.props.currentLocation.lat && this.props.currentLocation.lng &&
          this.renderChildren()
        }
      </div>
    );
  }
}

export default Location;

Location.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: null,
    lng: null
  },
  centerAroundCurrentLocation: false,
  visible: true
};
