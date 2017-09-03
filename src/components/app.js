import React, {Component} from 'react';
import SearchBar from '../containers/search-bar';

export default class App extends Component {
    render() {
        return (
            <div>
                <div >
                    <h1>My Weather App!!</h1>
                </div>
                <SearchBar />
            </div>
    );
    }
}
