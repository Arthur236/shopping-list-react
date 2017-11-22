import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.shoppingLists, action) {
    switch(action.type) {
        case actionTypes.GET_SHOPPING_LISTS:
            /* The result comes in the form of an array with objects
               like so: [ list1, list2 ]
               We need to change it to a format in which we can easily access
               posts later on like so: { 1: list } */
            return _.mapKeys(action.payload.data, 'id');

        case actionTypes.GET_SHOPPING_LIST:
            // const post = action.payload.data;
            // const newState = { ...state  };
            // newState[list.id] = list;
            // return newState;

            // This is identical to the above 4 lines of code
            return { ...state, [action.payload.data.id]: action.payload.data };

        default:
            return state;
    }
}
