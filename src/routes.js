import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Authenticate from './components/common/Authenticate';
import App from './components/App';
import LoginForm from "./components/login/LoginForm";
import RegistrationForm from "./components/register/RegistrationForm";
import EmailSubmit from "./components/reset/EmailSubmit";
import PasswordSubmit from "./components/reset/PasswordSubmit";
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
import SharedLists from "./components/share_lists/SharedLists";
import SharedListItems from "./components/share_lists/SharedListItems";

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/reset" component={EmailSubmit} />
        <Route exact path="/auth/password/:token" component={PasswordSubmit} />
        <Route exact path="/dashboard" component={Authenticate(ShoppingLists)} />
        <Route exact path="/shopping_lists/create" component={Authenticate(CreateList)} />
        <Route exact path="/shopping_lists/edit/:id" component={Authenticate(EditList)} />
        <Route exact path="/shopping_lists/share/:id/items" component={Authenticate(SharedListItems)} />
        <Route exact path="/shopping_lists/share/:id" component={Authenticate(ShareList)} />
        <Route exact path="/shopping_lists/share" component={Authenticate(SharedLists)} />
        <Route exact path="/shopping_lists/:id/items/edit/:item_id" component={Authenticate(EditItem)} />
        <Route exact path="/shopping_lists/:id/items" component={Authenticate(Items)} />
        <Route exact path="/shopping_lists/:id/items/create" component={Authenticate(CreateItem)} />
        <Route exact path="/friends" component={Authenticate(Friends)} />
        <Route exact path="/friends/add" component={Authenticate(AddFriend)} />
        <Route exact path="/friends/requests" component={Authenticate(ViewRequests)} />
    </Switch>
);
