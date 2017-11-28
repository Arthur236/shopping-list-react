import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import 'animate.css/animate.min.css';
// import './static/css/style.css';
import 'jquery/dist/jquery.min';
import 'wowjs/dist/wow.min';

const store = configureStore();

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
