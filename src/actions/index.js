import axios from 'axios';
import * as actionTypes from './actionTypes';
import Materialize from 'materialize-css/dist/js/materialize.min';

// const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
const ROOT_URL = 'http://localhost:5000/v1';

export function register(values, callback) {
    // const request = axios.post(`${ROOT_URL}/auth/register`)
    //     .then(() => callback());

    const request = axios({
        method: "post",
        url: ROOT_URL + "/auth/register",
        headers: {
            'Content-Type': 'application/json'
        },
        data: values
    }).then((response) => callback())
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
            
            let msg = error;
            Materialize.toast(msg, 6000, 'rounded');
    });

    return {
        type: actionTypes.REGISTER_REQUEST,
        payload: request
    };
}