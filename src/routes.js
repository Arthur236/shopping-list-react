import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Register from './components/register/Register';

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
    </Switch>
);
