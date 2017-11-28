import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function listItems(state = initialState.shoppingListItems, action) {
    switch(action.type) {
        case actionTypes.GET_ITEMS_SUCCESS:

            return action.response.data;

        default:
            return state;
    }
}
