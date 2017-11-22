import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.session, action) {
    switch(action.type) {
        case actionTypes.LOGIN_REQUEST:

            return [
                ...state,
                Object.assign({}, { session: !!sessionStorage.token })
            ];

        default:
            return state;
    }
}
