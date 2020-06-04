import HTTPClient from './http';

export async function getData(endpoint){
    try {
        const response = await HTTPClient.get(endpoint);
        
        return response;
    } catch (e) {
        
        return e.response.data;
    }
};

export async function postData(endpoint, requestBody){
    try {
        const response = await HTTPClient.post(endpoint, requestBody);
        
        return response;
    } catch (e) {
        
        return e.response.data;
    }
};