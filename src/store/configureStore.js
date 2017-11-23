import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(promise, thunk, reduxImutableStateInvariant())
    );
}
