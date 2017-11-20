import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import shoppingListsReducer from "./shoppingListsReducer";

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    shoppingLists: shoppingListsReducer
});

export default rootReducer;
