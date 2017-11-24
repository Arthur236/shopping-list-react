import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.loggedIn, action) {
    switch(action.type) {
        case actionTypes.LOGIN_REQUEST:

            return {
                ...state,
                loggedIn: true
            };

        default:
            return state;
    }
}
