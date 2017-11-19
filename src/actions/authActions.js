import axios from 'axios';
import Materialize from 'materialize-css/dist/js/materialize.min';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
const ROOT_URL = 'http://localhost:5000/v1';
const headers = { 'Content-Type': 'application/json' };

export function register(values, callback) {
    const request = axios({
        method: "post",
        url: ROOT_URL + "/auth/register",
        headers,
        data: values
    }).then(response => {
        Materialize.toast(response.data.message, 6000, 'rounded');
        callback();
    }).catch(error => {
        errorHandling.catchError(error);
    });

    return {
        type: actionTypes.REGISTER_REQUEST,
        payload: request
    };
}

export function login(values, callback) {
    const request = axios({
        method: "post",
        url: ROOT_URL + "/auth/login",
        headers,
        data: values
    }).then(response => {
        Materialize.toast(response.data.message, 6000, 'rounded');
        sessionStorage.setItem('token', response.data.access_token);
        callback();
    }).catch(error => {
        errorHandling.catchError(error);
    });

    return {
        type: actionTypes.REGISTER_REQUEST,
        payload: request
    };
}