var Link = require('react-router-dom').Link;
var Redirect = require('react-router-dom').Redirect;
var React = require('react');
var PropTypes = require('prop-types');

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      city: "",
      country: "",
      redirect: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidUpdate(){
    // after a redirect completes, reset the redirect property on
    // the state
    if(this.state.redirect === true){
      this.setState({
        redirect: false,
      })
    }
  }

  handleKeyUp(event){
    // if the user presses Enter, change the state to render a redirect
    // to the forecast page
    if(event.key === 'Enter'){     
      this.setState({
        redirect: true,
      })
    }
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
      this.state.redirect === false ? 
      <div 
      style={{flexDirection: this.props.direction}} 
      className='weather-container'
      onKeyUp={this.handleKeyUp}>
        <input 
          type='text' 
          className='form-control'
          value={this.state.text} 
          onChange={this.handleChange}
          placeholder='Ex. Los Angeles, USA'
        />
        <Link 
          to={'/forecast?city=' + this.state.city + '&country=' + this.state.country}
          className='button button-success'>
          Get Weather
        </Link>
      </div>
      : <Redirect to={'/forecast?city=' + this.state.city + '&country=' + this.state.country} />
    )
  }
}

WeatherForm.propTypes = {
  direction: PropTypes.string.isRequired,
}

module.exports = WeatherForm;