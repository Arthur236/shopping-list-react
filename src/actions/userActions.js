import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// Search for user

export function searchUser(term) {
    return function (dispatch) {
        dispatch(searchUserRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/users?q=" + term
        }).then(response => {
            if (response.status === 200) {
                dispatch(searchUserSuccess(response));
            } else {
                dispatch(searchUserFail(response));
            }
        }).catch(error => {
            dispatch(searchUserFail(error));
            errorHandling.catchError(error);
        });
    };
}

export function searchUserRequest() {
    return {
        type: actionTypes.SEARCH_USER_REQUEST,
    };
}

export function searchUserSuccess(response) {
    return {
        type: actionTypes.SEARCH_USER_SUCCESS,
        response
    };
}

export function searchUserFail(response) {
    return {
        type: actionTypes.SEARCH_USER_FAIL,
        response
    };
}

export function getProfile(id) {
    return function (dispatch) {
        dispatch(getProfileRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/users/" + id
        }).then(response => {
            if (response.status === 200) {
                dispatch(getProfileSuccess(response));
            } else {
                dispatch(getProfileFail(response));
            }
        }).catch(error => {
            dispatch(getProfileFail(error));
            errorHandling.catchError(error);
        });
    };
}

export function getProfileRequest() {
    return {
        type: actionTypes.GET_PROFILE_REQUEST,
    };
}

export function getProfileSuccess(response) {
    return {
        type: actionTypes.GET_PROFILE_SUCCESS,
        response
    };
}

export function getProfileFail(response) {
    return {
        type: actionTypes.GET_PROFILE_FAIL,
        response
    };
}

export function updateProfile(id, values) {
    return function (dispatch) {
        dispatch(updateProfileRequest());

        return axios({
            method: "put",
            url: helpers.ROOT_URL + "/users/" + id,
            data: values
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', "Credentials successfully updated");
                dispatch(updateProfileSuccess(response));
            } else {
                dispatch(getProfileFail(response));
            }
        }).catch(error => {
            dispatch(updateProfileFail(error));
            errorHandling.catchError(error);
        });
    };
}

export function updateProfileRequest() {
    return {
        type: actionTypes.UPDATE_PROFILE_REQUEST,
    };
}

export function updateProfileSuccess(response) {
    return {
        type: actionTypes.UPDATE_PROFILE_SUCCESS,
        response
    };
}

export function updateProfileFail(response) {
    return {
        type: actionTypes.UPDATE_PROFILE_FAIL,
        response
    };
}
