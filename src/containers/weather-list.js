import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: []
        };
    }

    renderWeather() {
        const weather = this.props.weather;
        if (weather.length) {
            return weather.map((cityWeather) => {   
                const city = cityWeather.config.url.split('/')[7].split('.')[0].split(',');
                const cityName = city[0];
                const state = city[1];
                const tempF = cityWeather.data.hourly_forecast[0].temp.english;
                const tempC = cityWeather.data.hourly_forecast[0].temp.metric;

                return (
                    <div className="city-temp-container" key={cityName}>
                        <div className="city-name">{cityName}, {state}</div>
                        <div className="city-temp">{tempC}&#8451; / {tempF}&#8457;</div>
                    </div >
                );
            } );
        }
    }

    render() {
        return (
            <div >
                {this.renderWeather()}
            </div>
        );
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
