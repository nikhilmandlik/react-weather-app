import React, {Component} from 'react';
import SearchBar from '../containers/search-bar';

export default class App extends Component {
    render() {
        return (
            <div>
                <div >
                    <div className="app-header">My Weather App</div>
                </div>
                <SearchBar />
            </div>
    );
    }
}
