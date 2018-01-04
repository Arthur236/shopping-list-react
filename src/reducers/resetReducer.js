import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.SEND_RESET_REQUEST_REQUEST:
            return {
                ...state,
                loading: true
            };

            case actionTypes.SEND_RESET_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false
            };

            case actionTypes.SEND_RESET_REQUEST_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}
