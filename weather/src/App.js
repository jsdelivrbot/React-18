import React, { Component } from 'react';

import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';

const API_KEY = '091d31fcede133f9fea90a4a6c0fe681';

class App extends Component {
  render() {
    return (
      <div >
        <Titles />
        <Forms />
        <Weather />
      </div>
    );
  }
}

export default App;
