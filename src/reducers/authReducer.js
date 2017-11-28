import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                registered: true,
                loading: false
            };

        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                user: action.user
            };

        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false
            };

        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}
