import axios from 'axios';

const WEATHER_API_KEY = '7905bb757a229109';
const GOOG_API_KEY = 'AIzaSyBn4lLGQrulj8poZjeImGlksXxQl-Oe1QU';
const ROOT_URL = `http://api.wunderground.com/api/${WEATHER_API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_CITIES = 'FETCH_CITIES';
export const SELECTED_CITY = 'SELECTED_CITY';

export function fetchWeather(city) {
    const url = `${ROOT_URL}/hourly/q/${city}.json`;
    const response = axios.get(url);
    
    return {
        type: FETCH_WEATHER, 
        payload: response
    };
}

export function fetchCities(city) {
    const ROOT = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?types=(cities)&components=country:US&key=';
    const url = `${ROOT}${GOOG_API_KEY}&input=${city}`;
    const response = axios.get(url);

    return {
        type: FETCH_CITIES,
        payload: response
    };
}



export function selectedCity(city) {
    return {
        type: SELECTED_CITY,
        payload: city
    };
}
