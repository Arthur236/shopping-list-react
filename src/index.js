import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import routes from './routes';
import {setAuthorizationToken} from "./utils/helpers";
import {loginSuccess} from "./actions/authActions";
import jwt from 'jsonwebtoken';

const store = configureStore();

if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    store.dispatch(loginSuccess(jwt.decode(localStorage.token)));
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Notifications />
            <Router>
                {routes}
            </Router>
        </div>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
