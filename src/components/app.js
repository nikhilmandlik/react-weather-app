import React, {Component} from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/Weather-list';

export default class App extends Component {
    render() {
        return (
            <div>
                <div >
                    <div className="app-header">My Weather App</div>
                </div>
                <SearchBar />
                <br />
                <WeatherList />
            </div>
        );
    }
}
