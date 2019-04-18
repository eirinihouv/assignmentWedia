import React, { Component } from 'react';
import { Welcome, PlacesToStay, PlacesToSee, GoogleApiWrapper } from './components'

class App extends Component {

  render() {
    return (
      <div>
        <Welcome />
        <PlacesToStay />
        <GoogleApiWrapper />
        <PlacesToSee />
      </div>
    );
  }
}

export default App;
