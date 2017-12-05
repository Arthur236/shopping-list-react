import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import shoppingLists from './shoppingListsReducer';
import listItems from './listItemsReducer';
import friends from './friendsReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth,
    shoppingLists,
    listItems,
    friends
});

export default rootReducer;
