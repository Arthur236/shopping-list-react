import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// Fetch all friends

export function getFriends(page, limit) {
    return function (dispatch) {
        dispatch(getFriendsRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/friends?page=" + page +"&limit=" + limit
        }).then(response => {
            if (response.status === 200) {
                dispatch(getFriendsSuccess(response));
            } else {
                dispatch(getFriendsFail(response));
            }
        }).catch(error => {
            dispatch(getFriendsFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function getFriendsRequest() {
    return {
        type: actionTypes.GET_FRIENDS_REQUEST,
    };
}

export function getFriendsSuccess(response) {
    return {
        type: actionTypes.GET_FRIENDS_SUCCESS,
        response
    };
}

export function getFriendsFail(response) {
    return {
        type: actionTypes.GET_FRIENDS_FAIL,
        response
    };
}

// Search for user

export function searchUser(term) {
    return function (dispatch) {
        dispatch(searchUserRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/friends?q=" + term
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
        type: actionTypes.GET_FRIENDS_REQUEST,
    };
}

export function searchUserSuccess(response) {
    return {
        type: actionTypes.GET_FRIENDS_SUCCESS,
        response
    };
}

export function searchUserFail(response) {
    return {
        type: actionTypes.GET_FRIENDS_FAIL,
        response
    };
}
