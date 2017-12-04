import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import {setAuthorizationToken} from "./utils/helpers";

const store = configureStore();

if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
                {routes}
            </Router>
        </div>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
