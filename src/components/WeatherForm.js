var React = require('react');
var PropTypes = require('prop-types');

class WeatherForm extends React.Component {
  render(){
    return (
      <div className={this.props.styleClass}>
        <input type='text' />
        <button>Get Weather</button>
      </div>
    );
  }
}

WeatherForm.propTypes = {
  styleClass: PropTypes.string.isRequired,
}

module.exports = WeatherForm;