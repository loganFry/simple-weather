import React, { Component } from "react";
import "./App.css";
var Nav = require('./components/Nav');
var WeatherForm = require('./components/WeatherForm');

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <WeatherForm styleClass='vertical-weather'/>
    </div>
    )
  }
}

export default App;
