var Link = require('react-router').Link;
var React = require('react');
var PropTypes = require('prop-types');

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      city: "",
      country: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    var textEntered = event.target.value;

    var commaPosition = textEntered.indexOf(",");
    var currentCity = "";
    var currentCountry = "";

    // If the text contains a comma, try to parse the city and country
    if(commaPosition > -1){
      currentCity = textEntered.slice(0, commaPosition);
      currentCountry = textEntered.slice(commaPosition + 1);
    }

    // Set the new state
    this.setState({
      text: textEntered,
      city: currentCity,
      country: currentCountry,
    });
  }

  render(){
    return (
      <div className={this.props.styleClass}>
        <input 
          type='text' 
          value={this.state.text} 
          onChange={this.handleChange}
          placeholder='Enter city, country'/>
        <button>Get Weather</button>
      </div>
    )
  }
}

WeatherForm.propTypes = {
  styleClass: PropTypes.string.isRequired,
}

module.exports = WeatherForm;