import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FetchActionCreators from '../actions/index';

class PopupCities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: []
        };

        this.validateCityList = this.validateCityList.bind(this);
    }

    validateCityList() {
        const cities = this.props.cities ? this.props.cities.cities : [];

        return cities;
    }

    selectedCity(city) {
        // TODO: need better way to hide popup
        this.props.fetchCities('');

        this.setState({cities:[]});
        const cityNode = city.description.split(',');
        const searchTerm = `${cityNode[0]},${cityNode[1]}`;
        this.props.selectedCity(searchTerm);
    }

    renderList() {
        const cities = this.validateCityList();
        if (cities && cities.length > 0) {
            return cities.map((city) => {
                const cityNode = city.description.split(',');
                return (
                    <li
                        key={city.id}
                        className="list-item"
                        onClick={() => this.selectedCity(city)}
                    >
                        {cityNode[0]}, {cityNode[1]}, USA
                    </li>
                );
            });
        }
    }

    render() {
        return ( 
            <ul className="cities-group">
                {this.renderList()}
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(FetchActionCreators, dispatch)
}

function mapStateToProps(cities) {
    return { cities };
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupCities);
