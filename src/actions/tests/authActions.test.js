import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import Notifications from 'react-notify-toast';
import * as authActions from '../authActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const userPayload = { username: 'User 1', email: 'user1@gmail.com', password: 'password' };
const emptyResponse = {};

const localStorageMock = {
    getItem: () => {},
    setItem: () => {},
    removeItem: () => {}
};

global.localStorage = localStorageMock;

describe('Tests For Register Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should register successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 201,
                response: userPayload
            });
        });

        const expectedActions = [
            { type: types.REGISTER_REQUEST },
            { type: types.REGISTER_SUCCESS, user: userPayload },
        ];

        const store = mockStore({ user: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(authActions.register(userPayload)).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
    });

    it('returns an object with the type of REGISTER_REQUEST', function() {
        expect(authActions.registerRequest(userPayload)).toEqual({
            type: types.REGISTER_REQUEST,
            user: userPayload
        });
    });

    it('returns an object with the type of REGISTER_SUCCESS', function() {
        expect(authActions.registerSuccess(emptyResponse)).toEqual({
            type: types.REGISTER_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of REGISTER_FAIL', function() {
        expect(authActions.registerFail(emptyResponse)).toEqual({
            type: types.REGISTER_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Log In Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should log in successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                message: "You logged in successfully."
            });
        });

        const expectedActions = [
            { type: types.LOGIN_REQUEST },
            { type: types.LOGIN_SUCCESS, response: "You logged in successfully." },
        ];

        const store = mockStore({});

        return [
            <Notifications key={1}/>,

            store.dispatch(authActions.login(userPayload)).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
    });

    it('returns an object with the type of LOGIN_REQUEST', function() {
        expect(authActions.loginRequest(userPayload)).toEqual({
            type: types.LOGIN_REQUEST,
            user: userPayload
        });
    });

    it('returns an object with the type of LOGIN_SUCCESS', function() {
        expect(authActions.loginSuccess(emptyResponse)).toEqual({
            type: types.LOGIN_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of LOGIN_FAIL', function() {
        expect(authActions.loginFail(emptyResponse)).toEqual({
            type: types.LOGIN_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Log Out Actions', () => {
    it('should log out successfully', () => {
        const expectedActions = [
            { type: types.LOGOUT_REQUEST }
        ];

        const store = mockStore({});

        store.dispatch(authActions.logout());
        expect(store.getActions()).toEqual(expectedActions);
        expect(localStorageMock.removeItem.toHaveBeenCalled);
    });

    it('returns an object with the type of LOGOUT_REQUEST', function() {
        expect(authActions.logoutRequest()).toEqual({
            type: types.LOGOUT_REQUEST
        });
    });
});
