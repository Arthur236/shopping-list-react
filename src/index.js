import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css/animate.min.css';
import './styles/css/style.css';
import 'jquery/dist/jquery.min';
import 'materialize-css/dist/js/materialize.min';
import 'wowjs/dist/wow';
import './styles/js/custom';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
