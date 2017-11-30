import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Register from './components/register/Register';
import Login from "./components/login/Login";
import ShoppingLists from "./components/shopping_lists/ShoppingLists";
import CreateList from "./components/shopping_lists/CreateList";
import EditList from "./components/shopping_lists/EditList";
import Items from "./components/list_items/Items";
import EditItem from "./components/list_items/EditItem";
import CreateItem from "./components/list_items/CreateItem";

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={ShoppingLists} onEnter={requireAuth} />
        <Route exact path="/shopping_lists/create" component={CreateList} onEnter={requireAuth} />
        <Route exact path="/shopping_lists/edit/:id" component={EditList} onEnter={requireAuth} />
        <Route exact path="/shopping_lists/:id/items/edit/:item_id" component={EditItem} onEnter={requireAuth} />
        <Route exact path="/shopping_lists/:id/items" component={Items} onEnter={requireAuth} />
        <Route exact path="/shopping_lists/:id/items/create" component={CreateItem} onEnter={requireAuth} />
    </Switch>
);

function requireAuth(nextState, replace) {
    if (!localStorage.getItem('token')) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
