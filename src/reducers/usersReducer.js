import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch(action.type) {
        case actionTypes.SEARCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.SEARCH_USER_SUCCESS:
            return { ...state,
                friends: action.response.data,
                loading: false
            };

        case actionTypes.SEARCH_USER_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_PROFILE_SUCCESS:
            return { ...state,
                activeUser: action.response.data,
                loading: false
            };

        case actionTypes.GET_PROFILE_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.UPDATE_PROFILE_SUCCESS:
            return { ...state,
                activeUser: action.response.data,
                loading: false
            };

        case actionTypes.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}
