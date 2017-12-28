import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import Notifications from 'react-notify-toast';
import * as friendActions from '../friendActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Tests For Get Friends Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const friendsPayload = {
        "total": 2,
        "next_page": "None",
        "previous_page": "None",
        "friends": [
            {
                "email": "user2@gmail.com",
                "username": "User 2"
            },
            {
                "email": "user4@gmail.com",
                "username": "User 4"
            }
        ]
    };

    it('should get all friends successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: friendsPayload
            });
        });

        const expectedActions = [
            { type: types.GET_FRIENDS_REQUEST },
            { type: types.GET_FRIENDS_SUCCESS, response: friendsPayload }
        ];

        const store = mockStore({ friendRequests: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(friendActions.getFriends(1, 10)).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
    });

    it('returns an object with the type of GET_FRIENDS_REQUEST', function() {
        expect(friendActions.getFriendsRequest()).toEqual({
            type: types.GET_FRIENDS_REQUEST
        });
    });

    it('returns an object with the type of GET_FRIENDS_SUCCESS', function() {
        expect(friendActions.getFriendsSuccess(emptyResponse)).toEqual({
            type: types.GET_FRIENDS_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_FRIENDS_FAIL', function() {
        expect(friendActions.getFriendsFail(emptyResponse)).toEqual({
            type: types.GET_FRIENDS_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Get Friend Requests Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const requestsPayload = {
        "total": 4,
        "next_page": "None",
        "previous_page": "None",
        "friend_requests": [
            {
                "email": "user1@gmail.com",
                "username": "User 1"
            },
            {
                "email": "user9@gmail.com",
                "username": "User 9"
            }
        ]
    };

    it('should get all friend requests successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: requestsPayload
            });
        });

        const expectedActions = [
            { type: types.GET_FRIEND_REQUESTS_REQUEST },
            { type: types.GET_FRIEND_REQUESTS_SUCCESS, response: requestsPayload }
        ];

        const store = mockStore({ friendRequests: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(friendActions.getFriendRequests(1, 10)).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
    });

    it('returns an object with the type of GET_FRIEND_REQUESTS_REQUEST', function() {
        expect(friendActions.getFriendRequestsRequest()).toEqual({
            type: types.GET_FRIEND_REQUESTS_REQUEST
        });
    });

    it('returns an object with the type of GET_FRIEND_REQUESTS_SUCCESS', function() {
        expect(friendActions.getFriendRequestsSuccess(emptyResponse)).toEqual({
            type: types.GET_FRIEND_REQUESTS_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_FRIEND_REQUESTS_FAIL', function() {
        expect(friendActions.getFriendRequestsFail(emptyResponse)).toEqual({
            type: types.GET_FRIEND_REQUESTS_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Send Friend Request Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const requestsPayload = { "message": "Friend request sent" };

    it('should send a friend request successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: requestsPayload
            });
        });

        const expectedActions = [
            { type: types.REQUEST_FRIEND_REQUEST },
            { type: types.REQUEST_FRIEND_SUCCESS, response: requestsPayload }
        ];

        const store = mockStore({ friendRequests: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(friendActions.sendRequest({friend_id: 1})).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
    });

    it('returns an object with the type of REQUEST_FRIEND_REQUEST', function() {
        expect(friendActions.sendRequestRequest()).toEqual({
            type: types.REQUEST_FRIEND_REQUEST
        });
    });

    it('returns an object with the type of REQUEST_FRIEND_SUCCESS', function() {
        expect(friendActions.sendRequestSuccess(emptyResponse)).toEqual({
            type: types.REQUEST_FRIEND_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of REQUEST_FRIEND_FAIL', function() {
        expect(friendActions.sendRequestFail(emptyResponse)).toEqual({
            type: types.REQUEST_FRIEND_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Accept Friend Request Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const requestsPayload = { "message": "You are now friends" };

    it('should accept a friend request successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: requestsPayload
            });
        });

        const expectedActions = [
            { type: types.ACCEPT_FRIEND_REQUEST_REQUEST },
            { type: types.ACCEPT_FRIEND_REQUEST_SUCCESS, response: requestsPayload }
        ];

        const store = mockStore({ friends: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(friendActions.acceptRequest(1, () => {})).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
    });

    it('returns an object with the type of ACCEPT_FRIEND_REQUEST_REQUEST', function() {
        expect(friendActions.acceptRequestRequest()).toEqual({
            type: types.ACCEPT_FRIEND_REQUEST_REQUEST
        });
    });

    it('returns an object with the type of ACCEPT_FRIEND_REQUEST_SUCCESS', function() {
        expect(friendActions.acceptRequestSuccess(emptyResponse)).toEqual({
            type: types.ACCEPT_FRIEND_REQUEST_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of ACCEPT_FRIEND_REQUEST_FAIL', function() {
        expect(friendActions.acceptRequestFail(emptyResponse)).toEqual({
            type: types.ACCEPT_FRIEND_REQUEST_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Remove Friend Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const requestsPayload = { "message": "Friend deleted successfully" };

    it('should remove a friend successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: requestsPayload
            });
        });

        const expectedActions = [
            { type: types.DELETE_FRIEND_REQUEST },
            { type: types.DELETE_FRIEND_SUCCESS, response: requestsPayload }
        ];

        const store = mockStore({ friends: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(friendActions.removeFriend(1, () => {})).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
    });

    it('returns an object with the type of DELETE_FRIEND_REQUEST', function() {
        expect(friendActions.removeFriendRequest()).toEqual({
            type: types.DELETE_FRIEND_REQUEST
        });
    });

    it('returns an object with the type of DELETE_FRIEND_SUCCESS', function() {
        expect(friendActions.removeFriendSuccess(emptyResponse)).toEqual({
            type: types.DELETE_FRIEND_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of DELETE_FRIEND_FAIL', function() {
        expect(friendActions.removeFriendFail(emptyResponse)).toEqual({
            type: types.DELETE_FRIEND_FAIL,
            response: emptyResponse
        });
    });
});
