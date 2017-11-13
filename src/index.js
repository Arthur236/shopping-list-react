import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css/animate.min.css';
import './styles/css/style.css';
import 'jquery/dist/jquery.min';
import 'materialize-css/dist/js/materialize.min';
import 'wowjs/dist/wow';
import './styles/js/custom';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
