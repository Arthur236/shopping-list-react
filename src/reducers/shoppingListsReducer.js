import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_LISTS_SUCCESS:

            return action.response.data;

        case actionTypes.GET_LIST_SUCCESS:
            return {...state,
            activeList: action.response.data}

        default:
            return state;
    }
}
