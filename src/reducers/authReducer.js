import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.loggedIn, action) {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:

            return {
                ...state,
                loggedIn: true
            };

        default:
            return state;
    }
}
