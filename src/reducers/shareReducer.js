import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch(action.type) {
        case actionTypes.SHARE_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.SHARE_LIST_SUCCESS:
            return { ...state,
                loading: false
            };

        case actionTypes.SHARE_LIST_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_SHARED_LISTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_SHARED_LISTS_SUCCESS:
            return { ...state,
                share: action.response.data,
                loading: false
            };

        case actionTypes.GET_SHARED_LISTS_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_SHARED_LIST_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_SHARED_LIST_ITEMS_SUCCESS:
            return { ...state,
                listItems: action.response.data,
                loading: false
            };

        case actionTypes.GET_SHARED_LIST_ITEMS_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.REMOVE_SHARED_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.REMOVE_SHARED_LIST_SUCCESS:
            return { ...state,
                loading: false
            };

        case actionTypes.REMOVE_SHARED_LIST_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}