var React = require('react');
var PropTypes = require('prop-types');

function DayDetail(props){
  render(props) {
    return (
      <div>

      </div>
    );
  }
}

DayDetail.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired
}

module.exports = DayDetail;