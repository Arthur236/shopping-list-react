import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import * as userActions from '../userActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore(middleware);

describe('Tests For Search User Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const userPayload = [
        {
            "id": 1,
            "username": "User 1",
            "email": "user1@gmail.com"
        }
    ];

    it('should get users matching criteria successfully', () => {
        mockAxios.onGet('/users', { params: { q: "user"} }).reply(200, userPayload);

        const expectedActions = [
            { type: types.SEARCH_USER_REQUEST },
            { type: types.SEARCH_USER_SUCCESS, response: userPayload }
        ];

        const store = mockStore({ shoppingLists: {} });

        return store.dispatch(userActions.searchUser("user")).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of SEARCH_USER_REQUEST', function() {
        expect(userActions.searchUserRequest()).toEqual({
            type: types.SEARCH_USER_REQUEST
        });
    });

    it('returns an object with the type of SEARCH_USER_SUCCESS', function() {
        expect(userActions.searchUserSuccess(emptyResponse)).toEqual({
            type: types.SEARCH_USER_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of SEARCH_USER_FAIL', function() {
        expect(userActions.searchUserFail(emptyResponse)).toEqual({
            type: types.SEARCH_USER_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Get Profile Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const userPayload = [
        {
            "id": 2,
            "username": "User 1",
            "email": "user1@gmail.com",
            "password": "password"
        }
    ];

    it('should get user profile successfully', () => {
        mockAxios.onGet('/users/2').reply(200, userPayload);

        const expectedActions = [
            { type: types.GET_PROFILE_REQUEST },
            { type: types.GET_PROFILE_SUCCESS, response: userPayload }
        ];

        const store = mockStore({});

        return store.dispatch(userActions.getProfile(2)).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of GET_PROFILE_REQUEST', function() {
        expect(userActions.getProfileRequest(2)).toEqual({
            type: types.GET_PROFILE_REQUEST
        });
    });

    it('returns an object with the type of GET_PROFILE_SUCCESS', function() {
        expect(userActions.getProfileSuccess(emptyResponse)).toEqual({
            type: types.GET_PROFILE_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_PROFILE_FAIL', function() {
        expect(userActions.getProfileFail(emptyResponse)).toEqual({
            type: types.GET_PROFILE_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Update Profile Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const userPayload = [
        {
            "id": 2,
            "username": "User 1",
            "email": "user1@gmail.com",
            "password": "password"
        }
    ];

    it('should update user profile successfully', () => {
        mockAxios.onPut('/users/2').reply(200, userPayload);

        const expectedActions = [
            { type: types.UPDATE_PROFILE_REQUEST },
            { type: types.UPDATE_PROFILE_SUCCESS, response: userPayload }
        ];

        const store = mockStore({});

        return store.dispatch(userActions.updateProfile(2)).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of UPDATE_PROFILE_REQUEST', function() {
        expect(userActions.updateProfileRequest(2)).toEqual({
            type: types.UPDATE_PROFILE_REQUEST
        });
    });

    it('returns an object with the type of UPDATE_PROFILE_SUCCESS', function() {
        expect(userActions.updateProfileSuccess(emptyResponse)).toEqual({
            type: types.UPDATE_PROFILE_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of UPDATE_PROFILE_FAIL', function() {
        expect(userActions.updateProfileFail(emptyResponse)).toEqual({
            type: types.UPDATE_PROFILE_FAIL,
            response: emptyResponse
        });
    });
});
