var React = require('react')

class DaySummary extends React.Component {
  render(){
    return (
      <div className='card'>
        <p>Average Temperature: {this.props.temp}</p>
      </div>
    )
  }
}

module.exports = DaySummary