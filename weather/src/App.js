import React, { Component } from 'react';

import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';
import './App.css';
const API_KEY = '091d31fcede133f9fea90a4a6c0fe681';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();
    const Country = e.target.elements.Country.value;
    const City = e.target.elements.City.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(City && Country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,

    });
  }else{

    this.setState = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: 'hi'
    }
  }
  }

  render() {
    return (
      <div >
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />

                  </div>
                <div className="col-xs-7 form-container">
                  <Forms getWeather={this.getWeather}/>
                  <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  error={this.state.error}
                />
            </div>
          </div>
        </div>
      </div></div></div>
    );
  }
}






export default App;
