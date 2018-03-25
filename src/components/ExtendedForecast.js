var React = require('react');
var QueryString = require('query-string');
var api = require('../util/api');

class ExtendedForecast extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            response: null,
        }
    }

    componentDidMount(){
        var params = QueryString.parse(this.props.location.search);
        var city = params.city;
        var country = params.country;
        api.Get5DayForecast(city, country)
            .then(function(data){
                return this.setState({
                    response: data,
                })
            }.bind(this))
    }

    render() {
        return (
            <div className='container'>
                {this.state.response ? 
                    <p>{JSON.stringify(this.state.response)}</p> 
                    : <p>Loading</p>}
            </div>
        )
    }
}

module.exports = ExtendedForecast;