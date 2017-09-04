import Axios from 'axios';

const API_KEY = "7905bb757a229109";
const ROOT_URL = `http://api.wunderground.com/api/${API_KEY}`;

// Find city from search Term and the use 
// http://autocomplete.wunderground.com/aq?query=new%20york&c=US
// Final:
// http://api.wunderground.com/api/7905bb757a229109/hourly/q/zmw:10001.8.99999.json

// http://api.wunderground.com/api/7905bb757a229109/hourly/q/CA/San_Francisco.json
// http://api.wunderground.com/api/7905bb757a229109/hourly/q/San%20Francisco,US.json

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    console.log("Inside fetchWeather");
    const url = `${ROOT_URL}/hourly/q/${city},US`;
    const response = Axios.get(url);
    return {
        type: FETCH_WEATHER, 
        payload: response
    }
}
