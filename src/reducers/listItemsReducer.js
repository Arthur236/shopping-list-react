import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.shoppingListItems, action) {
    switch(action.type) {
        case actionTypes.GET_LIST_ITEMS:

            return action.response.data;

        default:
            return state;
    }
}
