import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_FRIENDS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_FRIENDS_SUCCESS:
            return { ...state,
                friends: action.response.data,
                loading: false
            };

        case actionTypes.GET_FRIENDS_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_FRIEND_REQUESTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_FRIEND_REQUESTS_SUCCESS:
            return { ...state,
                friendRequests: action.response.data,
                loading: false
            };

        case actionTypes.GET_FRIEND_REQUESTS_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.REQUEST_FRIEND_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.REQUEST_FRIEND_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case actionTypes.REQUEST_FRIEND_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.ACCEPT_FRIEND_REQUEST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.ACCEPT_FRIEND_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case actionTypes.ACCEPT_FRIEND_REQUEST_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.DELETE_FRIEND_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case actionTypes.DELETE_FRIEND_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}
