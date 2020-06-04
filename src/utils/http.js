import axios from 'axios';

const HTTPClient = axios.create({
    baseURL: process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_DOMAIN,
    headers:{
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 30000
});

export default HTTPClient;