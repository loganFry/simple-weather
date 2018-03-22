var React = require('react');
var api = require('../util/api');

class ExtendedForecast extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return <p>Hello from extended forecast</p>;
    }
}

module.exports = ExtendedForecast;