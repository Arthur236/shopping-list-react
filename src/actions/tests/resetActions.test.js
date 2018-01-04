import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import * as resetActions from '../resetActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore(middleware);
const emptyResponse = {};

describe('Tests For Password Reset Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should send reset request successfully', () => {
        mockAxios.onPost('/auth/reset').reply(200, {email: 'user1@gmail.com'});

        const expectedActions = [
            {type: types.SEND_RESET_REQUEST_REQUEST},
            {type: types.SEND_RESET_REQUEST_SUCCESS, email: 'user1@gmail.com'},
        ];

        const store = mockStore();

        return store.dispatch(resetActions.sendResetRequest({email: 'user1@gmail.com'})).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of SEND_RESET_REQUEST_REQUEST', function () {
        expect(resetActions.sendResetRequestRequest({email: 'user1@gmail.com'})).toEqual({
            type: types.SEND_RESET_REQUEST_REQUEST,
            email: {email: 'user1@gmail.com'}
        });
    });

    it('returns an object with the type of SEND_RESET_REQUEST_SUCCESS', function () {
        expect(resetActions.sendResetRequestSuccess(emptyResponse)).toEqual({
            type: types.SEND_RESET_REQUEST_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of SEND_RESET_REQUEST_FAIL', function () {
        expect(resetActions.sendResetRequestFail(emptyResponse)).toEqual({
            type: types.SEND_RESET_REQUEST_FAIL,
            response: emptyResponse
        });
    });
});
