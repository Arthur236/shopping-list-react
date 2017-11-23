import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from "./authReducer";
import shoppingLists from "./shoppingListsReducer";

const rootReducer = combineReducers({
    form: formReducer,
    auth,
    shoppingLists
});

export default rootReducer;
