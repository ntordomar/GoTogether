import React, { Component } from 'react';

class LocationSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: null,
    };
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
    script.async = true;
    window.initMap = this.initMap;
    document.body.appendChild(script);
  }

  initMap = () => {
    const map = new window.google.maps.Map(this.mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });
    const marker = new window.google.maps.Marker({
      position: { lat: 0, lng: 0 },
      map,
    });
    window.google.maps.event.addListener(map, 'click', (event) => {
      const { lat, lng } = event.latLng.toJSON();
      marker.setPosition(event.latLng);
      this.setState({ selectedLocation: { lat, lng } });
    });
  };

  render() {
    return (
      <div style={{   top:40, left:45 , height: '400px', width: '800px' }} ref={this.mapRef}>
        {this.state.selectedLocation && (
          <p>
            Selected location: {this.state.selectedLocation.lat}, {this.state.selectedLocation.lng}
          </p>
        )}
        
      </div>
    );
  }
}


export default LocationSelector;
