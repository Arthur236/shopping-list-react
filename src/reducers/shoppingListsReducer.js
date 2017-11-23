import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.shoppingLists, action) {
    switch(action.type) {
        case actionTypes.GET_SHOPPING_LISTS:
            console.log(action.response.data.shopping_lists);

            return [
                ...state,
                Object.assign({}, action.response.data.shopping_lists)
            ];
            // return action.response.data;

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
