import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import shoppingLists from './shoppingListsReducer';
import listItems from './listItemsReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth,
    shoppingLists,
    listItems
});

export default rootReducer;
