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

        default:
            return state;
    }
}
