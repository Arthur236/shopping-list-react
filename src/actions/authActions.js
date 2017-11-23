import axios from 'axios';
import Materialize from 'materialize-css/dist/js/materialize.min';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
const ROOT_URL = 'http://localhost:5000/v1';
const headers = { 'Content-Type': 'application/json' };

export function registerSuccess(response) {
    Materialize.toast(response.data.message, 6000, 'rounded');

    return {
        type: actionTypes.REGISTER_REQUEST,
        response
    };
}

export function register(values) {
    return function (dispatch) {
        return axios({
            method: "post",
            url: ROOT_URL + "/auth/register",
            headers: headers,
            data: values
        }).then(response => {
            dispatch(registerSuccess(response));
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}

export function loginSuccess(response) {
    Materialize.toast(response.data.message, 6000, 'rounded');
    sessionStorage.setItem('token', response.data.access_token);

    return {
        type: actionTypes.LOGIN_REQUEST,
        response
    };
}

export function login(values) {
    return function (dispatch) {
        return axios({
            method: "post",
            url: ROOT_URL + "/auth/login",
            headers: headers,
            data: values
        }).then(response => {
            dispatch(loginSuccess(response));
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}