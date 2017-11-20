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

        default:
            return state;
    }
}
