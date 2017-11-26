import axios from 'axios';
import Materialize from 'materialize-css/dist/js/materialize.min';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
const ROOT_URL = 'http://localhost:5000/v1';
const headers = { 'Content-Type': 'application/json' };

export function registerSuccess(response) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        response
    };
}

export function registerFail(response) {
    return {
        type: actionTypes.REGISTER_FAIL,
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
            if (response.status === 201) {
                Materialize.toast(response.data.message, 6000, 'rounded');

                dispatch(registerSuccess(response));
            } else {
                Materialize.toast(response.data.message, 6000, 'rounded');

                dispatch(registerFail(response));
            }
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}

export function loginFail(response) {
    return {
        type: actionTypes.LOGIN_FAIL,
        response
    };
}

export function loginSuccess(response) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
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
            window.localStorage.removeItem('token');

            if (response.status === 200) {
                Materialize.toast(response.data.message, 6000, 'rounded');
                window.localStorage.setItem('token', response.data.access_token);

                dispatch(loginSuccess(response));
            } else {
                Materialize.toast(response.data.message, 6000, 'rounded');

                dispatch(loginFail(response));
            }
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}