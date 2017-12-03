import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

const headers = { 'Content-Type': 'application/json' };

export function register(values) {
    return function (dispatch) {
        dispatch(registerRequest(values));

        return axios({
            method: "post",
            url: helpers.ROOT_URL + "/auth/register",
            headers: headers,
            data: values
        }).then(response => {
            if (response.status === 201) {

                helpers.showToast('success', response.data.message);
                dispatch(registerSuccess(response));
            } else {

                dispatch(registerFail(response));
            }
        }).catch(error => {
            dispatch(registerFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function registerRequest(user) {
    return {
        type: actionTypes.REGISTER_REQUEST,
        user
    };
}

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

export function login(values) {
    return function (dispatch) {
        dispatch(loginRequest(values));

        return axios({
            method: "post",
            url: helpers.ROOT_URL + "/auth/login",
            headers: headers,
            data: values
        }).then(response => {
            window.localStorage.removeItem('token');

            if (response.status === 200) {
                helpers.showToast('success', response.data.message);
                window.localStorage.setItem('token', response.data.access_token);

                dispatch(loginSuccess(response));
            } else {
                dispatch(loginFail(response));
            }
        }).catch(error => {
            dispatch(loginFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function loginRequest(user) {
    return {
        type: actionTypes.LOGIN_REQUEST,
        user
    };
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
