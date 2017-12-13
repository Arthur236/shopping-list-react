import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.REGISTER_REQUEST:
            return {
                ...state,
                registered: false,
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
                registered: false,
                loading: false
            };

        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loggedIn: false,
                loading: true,
                user: action.user.email
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
                loggedIn: false,
                loading: false
            };

        case actionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                loggedIn: false
            };

        default:
            return state;
    }
}
