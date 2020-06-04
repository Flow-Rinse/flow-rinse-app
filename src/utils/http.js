import axios from 'axios';

const HTTPClient = axios.create({
    baseURL: 'http://flowrinse-api.test',
    headers:{
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 30000
});

export default HTTPClient;