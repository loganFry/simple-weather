var React = require("react");
var WeatherForm = require('./WeatherForm');
var Link = require('react-router-dom').Link;

class Nav extends React.Component {
  render() {
      return (
        <div className='nav'>
            <Link to='/' className='header'>Simple Weather</Link>
            <WeatherForm direction='row'/>
        </div>
      );
  }
}

module.exports = Nav;
