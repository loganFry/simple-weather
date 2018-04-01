var React = require('react')
var PropTypes = require('prop-types')

function TempSummary(props){
    return (
      <div className='temp-summary'>
        <h2>{props.low.toFixed(0)}&#8457;</h2>
        <h2>{props.high.toFixed(0)}&#8457;</h2>
      </div>
    )
}
  
TempSummary.propTypes = {
low: PropTypes.number.isRequired,
high: PropTypes.number.isRequired,
}

module.exports = TempSummary