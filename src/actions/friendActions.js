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

// Fetch all friend requests

export function getFriendRequests(page, limit) {
    return function (dispatch) {
        dispatch(getFriendRequestsRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/friends/requests?page=" + page +"&limit=" + limit
        }).then(response => {
            if (response.status === 200) {
                dispatch(getFriendRequestsSuccess(response));
            } else {
                dispatch(getFriendRequestsFail(response));
            }
        }).catch(error => {
            dispatch(getFriendRequestsFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function getFriendRequestsRequest() {
    return {
        type: actionTypes.GET_FRIEND_REQUESTS_REQUEST,
    };
}

export function getFriendRequestsSuccess(response) {
    return {
        type: actionTypes.GET_FRIEND_REQUESTS_SUCCESS,
        response
    };
}

export function getFriendRequestsFail(response) {
    return {
        type: actionTypes.GET_FRIEND_REQUESTS_FAIL,
        response
    };
}

// Send friend request

export function sendRequest(values) {
    return function (dispatch) {
        dispatch(sendRequestRequest());

        return axios({
            method: "post",
            url: helpers.ROOT_URL + "/friends",
            data: values
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(sendRequestSuccess(response));
            } else {
                dispatch(sendRequestFail(response));
            }
        }).catch(error => {
            dispatch(sendRequestFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function sendRequestRequest() {
    return {
        type: actionTypes.REQUEST_FRIEND_REQUEST,
    };
}

export function sendRequestSuccess(response) {
    return {
        type: actionTypes.REQUEST_FRIEND_SUCCESS,
        response
    };
}

export function sendRequestFail(response) {
    return {
        type: actionTypes.REQUEST_FRIEND_FAIL,
        response
    };
}

// Accept friend request

export function acceptRequest(id, callback) {
    return function (dispatch) {
        dispatch(acceptRequestRequest());

        return axios({
            method: "put",
            url: helpers.ROOT_URL + "/friends/" + id
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(acceptRequestSuccess(response));
                callback();
            } else {
                dispatch(acceptRequestFail(response));
            }
        }).catch(error => {
            dispatch(acceptRequestFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function acceptRequestRequest() {
    return {
        type: actionTypes.ACCEPT_FRIEND_REQUEST_REQUEST,
    };
}

export function acceptRequestSuccess(response) {
    return {
        type: actionTypes.ACCEPT_FRIEND_REQUEST_SUCCESS,
        response
    };
}

export function acceptRequestFail(response) {
    return {
        type: actionTypes.ACCEPT_FRIEND_REQUEST_FAIL,
        response
    };
}
