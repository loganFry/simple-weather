var React = require('react')
var PropTypes = require('prop-types')
var moment = require('moment')
require('../styles/flipper.css') //styles for flip animation

function TempSummary(props){
  return (
    <div className='temp-summary'>
      <h2>{props.low.toFixed(0)}&#8457;</h2>
      <h2>{props.high.toFixed(0)}&#8457;</h2>
    </div>
  )
}

class DaySummary extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDetail: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    var oldShowDetail = this.state.showDetail;
    console.log(this.props.allWeatherData)
    this.setState({
      showDetail: !oldShowDetail,
    });
  }

  render(){
    return (
      <div className='card flip-container'>
        <div className='flipper'>
          <div className='front'>
            <h4>
              {moment(this.props.weatherDate).format('dddd, MMM Do')}
            </h4>
            <img className='weather-icon' src={'/images/weather-icons/' + this.props.icon + '.svg'} alt='weather icon'/>
            <TempSummary low={this.props.low} high={this.props.high} />
          </div>
          <div className='back'>
            <h2>{this.props.description}</h2>
            <h2>average: {this.props.temp.toFixed(0)}&#8457;</h2>
            <h2>low: {this.props.low.toFixed(0)}&#8457;</h2>
            <h2>high: {this.props.high.toFixed(0)}&#8457;</h2>
            <h2>humidity: {this.props.humidity.toFixed(0)}%</h2>                        
          </div>                   
        </div>           
      </div>
    )
  }
}

DaySummary.propTypes = {
  low: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  weatherDate: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
}

module.exports = DaySummary