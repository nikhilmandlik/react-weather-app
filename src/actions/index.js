import Axios from 'axios';

const API_KEY = '7905bb757a229109';
const ROOT_URL = `http://api.wunderground.com/api/${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    console.log("Inside fetchWeather");
    const url = `${ROOT_URL}/hourly/q/${city},US`;
    const response = Axios.get(url);
    return {
        type: FETCH_WEATHER, 
        payload: response
    };
}
