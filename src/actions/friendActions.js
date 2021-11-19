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
    };
}

// Initiate request to get friends
export function getFriendsRequest() {
    return {
        type: actionTypes.GET_FRIENDS_REQUEST,
    };
}

// Handle successful fetching of friends
export function getFriendsSuccess(response) {
    return {
        type: actionTypes.GET_FRIENDS_SUCCESS,
        response
    };
}

// Handle fetch failure
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
    };
}

// Initiate request to fetch friend requests
export function getFriendRequestsRequest() {
    return {
        type: actionTypes.GET_FRIEND_REQUESTS_REQUEST,
    };
}

// Handle fetch success
export function getFriendRequestsSuccess(response) {
    return {
        type: actionTypes.GET_FRIEND_REQUESTS_SUCCESS,
        response
    };
}

// Handle fetch failure
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
    };
}

// Initiate request to send friend request
export function sendRequestRequest() {
    return {
        type: actionTypes.REQUEST_FRIEND_REQUEST,
    };
}

// Handle successful sending of request
export function sendRequestSuccess(response) {
    return {
        type: actionTypes.REQUEST_FRIEND_SUCCESS,
        response
    };
}

// Handle failure to send request
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
    };
}

// Initiate request to accept friend request
export function acceptRequestRequest() {
    return {
        type: actionTypes.ACCEPT_FRIEND_REQUEST_REQUEST,
    };
}

// Handle successful acceptance
export function acceptRequestSuccess(response) {
    return {
        type: actionTypes.ACCEPT_FRIEND_REQUEST_SUCCESS,
        response
    };
}

// Handle failure to accept
export function acceptRequestFail(response) {
    return {
        type: actionTypes.ACCEPT_FRIEND_REQUEST_FAIL,
        response
    };
}

// Remove friend
export function removeFriend(id, callback) {
    return function (dispatch) {
        dispatch(removeFriendRequest());

        return axios({
            method: "delete",
            url: helpers.ROOT_URL + "/friends/" + id
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(removeFriendSuccess(response));
                callback();
            } else {
                dispatch(removeFriendFail(response));
            }
        }).catch(error => {
            dispatch(removeFriendFail(error));
            errorHandling.catchError(error);
        });
    };
}

// Initiate request to remove friend
export function removeFriendRequest() {
    return {
        type: actionTypes.DELETE_FRIEND_REQUEST,
    };
}

// Handle successful removal of friend
export function removeFriendSuccess(response) {
    return {
        type: actionTypes.DELETE_FRIEND_SUCCESS,
        response
    };
}

// Handle failure to remove friend
export function removeFriendFail(response) {
    return {
        type: actionTypes.DELETE_FRIEND_FAIL,
        response
    };
}
