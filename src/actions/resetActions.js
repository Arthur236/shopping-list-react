import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// Send a request to reset password to server
export function sendResetRequest(email) {
    return function (dispatch) {
        dispatch(sendResetRequestRequest(email));

        return axios({
            method: "post",
            url: helpers.ROOT_URL + "/auth/reset",
            data: email
        }).then(response => {
            if (response.status === 200) {

                helpers.showToast("success", "Request sent successfully.");
                dispatch(sendResetRequestSuccess(response));
            } else {

                dispatch(sendResetRequestFail(response));
            }
        }).catch(error => {
            dispatch(sendResetRequestFail(error));
            errorHandling.catchError(error);
        });
    };
}

// Initiate request to send password reset request
export function sendResetRequestRequest(email) {
    return {
        type: actionTypes.SEND_RESET_REQUEST_REQUEST,
        email
    };
}

// Handle successful sending of request
export function sendResetRequestSuccess(response) {
    return {
        type: actionTypes.SEND_RESET_REQUEST_SUCCESS,
        response
    };
}

// Handle failure to send request
export function sendResetRequestFail(response) {
    return {
        type: actionTypes.SEND_RESET_REQUEST_FAIL,
        response
    };
}

// Reset user account password
export function passwordReset(values, token) {
    return function (dispatch) {
        dispatch(passwordResetRequest());

        return axios({
            method: "put",
            url: helpers.ROOT_URL + "/auth/password/" + token,
            data: values
        }).then(response => {
            if (response.status === 200) {

                helpers.showToast("success", response.data.message);
                dispatch(passwordResetSuccess(response));
            } else {

                dispatch(passwordResetFail(response));
            }
        }).catch(error => {
            dispatch(passwordResetFail(error));
            errorHandling.catchError(error);
        });
    };
}

// Initiate request to reset password
export function passwordResetRequest() {
    return {
        type: actionTypes.PASSWORD_RESET_REQUEST
    };
}

// Handle successful resetting of user password
export function passwordResetSuccess(response) {
    return {
        type: actionTypes.PASSWORD_RESET_SUCCESS,
        response
    };
}

// Handle failure to reset password
export function passwordResetFail(response) {
    return {
        type: actionTypes.PASSWORD_RESET_FAIL,
        response
    };
}
