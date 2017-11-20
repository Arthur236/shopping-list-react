import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Register from './components/register/Register';
import Login from "./components/login/Login";
import ShoppingLists from "./components/shopping_lists/ShoppingLists";
import ShoppingList from "./components/shopping_lists/ShoppingList";

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/dashboard" component={ShoppingLists} onEnter={requireAuth} />
        <Route path="/shopping_lists/:id" component={ShoppingList} onEnter={requireAuth} />
    </Switch>
);

function requireAuth(nextState, replace) {
    if (!sessionStorage.token) {
        replace({
            pathname: '/auth/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
