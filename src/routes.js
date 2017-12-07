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
import Friends from "./components/friends/Friends";
import AddFriend from "./components/friends/AddFriend";
import ViewRequests from "./components/friends/ViewRequests";
import ShareList from "./components/share_lists/ShareList";

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={ShoppingLists} />
        <Route exact path="/shopping_lists/create" component={CreateList} />
        <Route exact path="/shopping_lists/edit/:id" component={EditList} />
        <Route exact path="/shopping_lists/share/:id" component={ShareList} />
        <Route exact path="/shopping_lists/:id/items/edit/:item_id" component={EditItem} />
        <Route exact path="/shopping_lists/:id/items" component={Items} />
        <Route exact path="/shopping_lists/:id/items/create" component={CreateItem} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/friends/add" component={AddFriend} />
        <Route exact path="/friends/requests" component={ViewRequests} />
    </Switch>
);
