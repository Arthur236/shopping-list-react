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
    }).then(response => {
        Materialize.toast(response.data.message, 6000, 'rounded');
        callback();
    }).catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response);
            Materialize.toast(error.response.data.message, 6000, 'rounded');
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            Materialize.toast(error.request.data, 6000, 'rounded');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            Materialize.toast(error.message, 6000, 'rounded');
        }
    });

    return {
        type: actionTypes.REGISTER_REQUEST,
        payload: request
    };
}

// export function register(values) {
//     return function(dispatch) {
//         return axios({
//         method: "post",
//         url: ROOT_URL + "/auth/register",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: values
//     }).then(response => {
//         dispatch({
//             type: actionTypes.REGISTER_REQUEST,
//             payload: response
//         });
//         }).catch(error => {
//             throw(error);
//         });
//     }
// }