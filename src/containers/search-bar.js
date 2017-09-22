import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FetchActionCreators from '../actions/index';

import PopupCities from './popup-cities';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state= {
            term: ''
        };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        const searchTerm = event.target.value;
        this.props.selectedCity(searchTerm);
        this.props.fetchCities(searchTerm);
    }

    onFormSubmit(event) {
        event.preventDefault();
        
        let term = this.props.term.split(',');
        const cityName = term[0];

        if (term[1] ) {
            const state = term[1].trim();
            term = `${cityName},${state}`;
            this.props.fetchWeather(term);
        }
        
        this.props.selectedCity('');
    }

    render() {
        return (
            <div className="input-form">
                <form className="form-inline" onSubmit={this.onFormSubmit}>
                  <input type="text" className="form-control" placeholder="Enter city name"
                    value={this.props.term}
                    onChange={this.onInputChange}
                  />
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>  
                <div className="cities">
                    <PopupCities />
                </div>
                <hr />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(FetchActionCreators, dispatch)
}

function mapStateToProps(state) {
    return {
        term: state.selectedCity
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
