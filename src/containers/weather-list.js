import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

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
                if (!cityWeather.data.hourly_forecast) {
                    return;
                }
                const city = cityWeather.config.url.split('/')[7].split('.')[0].split(',');
                const cityName = city[0];
                const state = city[1];

                const tempF = cityWeather.data.hourly_forecast[0].temp.english;
                const tempC = cityWeather.data.hourly_forecast[0].temp.metric;
                const iconUrl = cityWeather.data.hourly_forecast[0].icon_url;

                return (
                    <div className="city-temp-container" key={cityName}>
                        <div className="city-name">{cityName}, {state}</div>
                        <div className="city-temp">
                            
                            <span className="city-condition-text">
                                <img className="city-condition-icon" src={iconUrl} />
                                {tempC}&#8451; / {tempF}&#8457;
                            </span>
                            
                            <Chart
                                cityName={cityName}
                                chartData={cityWeather.data.hourly_forecast}
                            />
                        </div>
                    </div>
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
