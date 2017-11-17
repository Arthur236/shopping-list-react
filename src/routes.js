import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Register from './components/register/Register';
import Login from "./components/login/Login";

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/login" component={Login} />
    </Switch>
);
