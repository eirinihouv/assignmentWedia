import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <div className="map">
        <Map
          className="map__display"
          google={this.props.google}
          zoom={14}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyASLuC8MD01GHPqsMc7aIs0BZUG7hF6CHg' })(MapContainer);
