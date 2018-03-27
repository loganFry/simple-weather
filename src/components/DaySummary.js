var React = require('react')
var PropTypes = require('prop-types')
var moment = require('moment')

function TempSummary(props){
  return (
    <div className='temp-summary'>
      <h2>{props.low.toFixed(0)}&#8457;</h2>
      <h2>{props.high.toFixed(0)}&#8457;</h2>
    </div>
  )
}

class DaySummary extends React.Component {
  render(){
    return (
      <div className='card'>
        <h4>
          {moment(this.props.weatherDate).format('dddd, MMM Do')}
        </h4>
        <img className='weather-icon' src={'/images/weather-icons/' + this.props.icon + '.svg'} alt='weather icon'/>
        <TempSummary low={this.props.low} high={this.props.high} />
      </div>
    )
  }
}

DaySummary.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
}

module.exports = DaySummary