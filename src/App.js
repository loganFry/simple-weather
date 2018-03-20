import React, { Component } from "react";
import "./App.css";
var Nav = require('./components/Nav');
var WeatherForm = require('./components/WeatherForm');

class App extends Component {
  render() {
    return (
      <div>
        <Nav /> 
        <div style={{margin: 'auto', width: '300px'}}>               
          <WeatherForm />
        </div>
      </div>
    )
  }
}

export default App;
