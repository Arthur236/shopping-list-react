import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

export default function(state = {}, action) {
    switch(action.type) {
        case actionTypes.REGISTER_REQUEST:
            console.log(action.type);

        default:
            return state;
    }
}
