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