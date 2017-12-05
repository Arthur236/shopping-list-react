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
    }
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