import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from 'react-router'
import BrowserRouter from "react-router-dom/BrowserRouter";

var Nav = require('./components/Nav');
var Home = require('./components/Home');
var ExtendedForecast = require('./components/ExtendedForecast');

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={ExtendedForecast} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
