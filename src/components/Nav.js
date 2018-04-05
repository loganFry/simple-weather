var React = require("react");
var WeatherForm = require('./WeatherForm');
var Link = require('react-router-dom').Link;
var MediaQuery = require('react-responsive').default;

class Nav extends React.Component {
  render() {
      return (
        <div>
            <MediaQuery minWidth={675}>
              <div className='nav nav-horizontal'>
                <Link to='/' className='header'>Simple Weather</Link>
                <WeatherForm direction='row'/>
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={674}>
              <div className='nav nav-vertical'>
                <Link to='/' className='header'>Simple Weather</Link>
                <WeatherForm direction='column'/>
              </div>
            </MediaQuery>
        </div>
      );
  }
}

module.exports = Nav;
