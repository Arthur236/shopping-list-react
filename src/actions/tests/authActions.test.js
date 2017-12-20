import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import Notifications from 'react-notify-toast';
import * as authActions from '../authActions';
import * as types from '../actionTypes';
import initialState from "../../reducers/initialState";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Tests For Register Actions', () => {
    beforeEach(() => {
        moxios.install(axios);
    });
    afterEach(() => {
        moxios.uninstall(axios);
    });

    it('should register successfully', () => {
        const payload = {id: 1, username: 'User 1', email: 'user1@gmail.com'};
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 201,
                response: payload
            });
        });

        const expectedActions = [
            {type: types.REGISTER_REQUEST},
            {type: types.REGISTER_SUCCESS, response: [{id: 1, username: 'User 1', email: 'user1@gmail.com'}]}
        ];

        const store = mockStore(initialState, expectedActions);
        return [
            <Notifications key={1} />,

            store.dispatch(authActions.register())
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(types.REGISTER_REQUEST);
                expect(actions[1].type).toEqual(types.REGISTER_SUCCESS);
            })
        ];
    });
});
