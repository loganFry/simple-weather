var React = require('react');
var PropTypes = require('prop-types');

class WeatherForm extends React.Component {
  render(){
    return (
      <div className='weather-form' style={{flexDirection: this.props.direction}}>
        <input type='text' />
        <button>Get Weather</button>
      </div>
    );
  }
}

WeatherForm.defaultProps = {
  direction: 'column',
}

WeatherForm.propTypes = {
  direction: PropTypes.string.isRequired,
}

module.exports = WeatherForm;