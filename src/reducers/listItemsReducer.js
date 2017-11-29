import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function listItems(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_ITEMS_SUCCESS:
            return { ...state,
                listItems: action.response.data,
                loading: false
            };

        case actionTypes.GET_ITEMS_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}
