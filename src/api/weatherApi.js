import axios from 'axios';
const weatherApi = axios.create({
     baseURL: `http://api.weatherapi.com/v1/forecast.json?key=8e89ac91d4bb45f2887200813242604` //&q=London&days=7&aqi=no&alerts=no
})
export default weatherApi
