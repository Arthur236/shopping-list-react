import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import shoppingLists from './shoppingListsReducer';
import shoppingListItems from './listItemsReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth,
    shoppingLists,
    shoppingListItems
});

export default rootReducer;
