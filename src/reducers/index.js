import { combineReducers } from 'redux';
import weatherReducer from './reducer-weather';
import fetchCitiesReducer from './reducer-fetch-cities';
import selectedCity from './reducer-selected-city';

const RootReducer = combineReducers({
        cities: fetchCitiesReducer,
        selectedCity: selectedCity,
        weather: weatherReducer
});

export default RootReducer;
