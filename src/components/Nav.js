var React = require("react");
var WeatherForm = require('./WeatherForm');

class Nav extends React.Component {
  render() {
      return (
        <div className='nav'>
            <h1>Simple Weather</h1>
            <WeatherForm direction='row'/>
        </div>
      );
  }
}



module.exports = Nav;
