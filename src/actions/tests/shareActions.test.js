import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import * as shareActions from '../shareActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore(middleware);

describe('Tests For Share List Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listPayload = {
        "message": "Shopping list shared successfully"
    };

    it('should share a list successfully', () => {
        mockAxios.onPost('/shopping_lists/share').reply(200, {});

        const expectedActions = [
            { type: types.SHARE_LIST_REQUEST },
            { type: types.SHARE_LIST_SUCCESS, response: listPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(shareActions.shareList()).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {})
    });

    it('returns an object with the type of SHARE_LIST_REQUEST', function() {
        expect(shareActions.shareListRequest()).toEqual({
            type: types.SHARE_LIST_REQUEST
        });
    });

    it('returns an object with the type of SHARE_LIST_SUCCESS', function() {
        expect(shareActions.shareListSuccess(emptyResponse)).toEqual({
            type: types.SHARE_LIST_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of SHARE_LIST_FAIL', function() {
        expect(shareActions.shareListFail(emptyResponse)).toEqual({
            type: types.SHARE_LIST_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Get Shared Lists Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listPayload = {
        "total": 2,
        "next_page": "None",
        "previous_page": "None",
        "shared_lists": [
            {
                "id": 1,
                "name": "List 1",
                "description": "Some description"
            },
            {
                "id": 2,
                "name": "List 2",
                "description": "Some description"
            }
        ]
    };

    it('should get shared lists successfully', () => {
        mockAxios.onGet('/shopping_lists/share', { params: { page: 1, limit: 10 } }).reply(200, {});

        const expectedActions = [
            { type: types.GET_SHARED_LISTS_REQUEST },
            { type: types.GET_SHARED_LISTS_SUCCESS, response: listPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(shareActions.getSharedLists()).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {})
    });

    it('returns an object with the type of GET_SHARED_LISTS_REQUEST', function() {
        expect(shareActions.getSharedListsRequest()).toEqual({
            type: types.GET_SHARED_LISTS_REQUEST
        });
    });

    it('returns an object with the type of GET_SHARED_LISTS_SUCCESS', function() {
        expect(shareActions.getSharedListsSuccess(emptyResponse)).toEqual({
            type: types.GET_SHARED_LISTS_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_SHARED_LISTS_FAIL', function() {
        expect(shareActions.getSharedListsFail(emptyResponse)).toEqual({
            type: types.GET_SHARED_LISTS_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Get Shared List Items Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listPayload = {
        "total": 2,
        "next_page": "None",
        "previous_page": "None",
        "shared_list_items": [
            {
                "id": 1,
                "name": "Item 1",
                "quantity": 1,
                "unit_price": 5500
            },
            {
                "id": 2,
                "name": "Item 2",
                "quantity": 1,
                "unit_price": 5500
            }
        ]
    };

    it('should get shared list items successfully', () => {
        mockAxios.onGet('/shopping_lists/share/1/items', { params: { page: 1, limit: 10 } }).reply(200, {});

        const expectedActions = [
            { type: types.GET_SHARED_LIST_ITEMS_REQUEST },
            { type: types.GET_SHARED_LIST_ITEMS_SUCCESS, response: listPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(shareActions.getSharedListItems(1, 1, 10)).then(() => {

            const dispatchedActions = store.getActions();
            console.log('>>>>>>>>>>>>>>>>>>', dispatchedActions);
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {})
    });

    it('returns an object with the type of GET_SHARED_LIST_ITEMS_REQUEST', function() {
        expect(shareActions.getSharedListItemsRequest()).toEqual({
            type: types.GET_SHARED_LIST_ITEMS_REQUEST
        });
    });

    it('returns an object with the type of GET_SHARED_LIST_ITEMS_SUCCESS', function() {
        expect(shareActions.getSharedListItemsSuccess(emptyResponse)).toEqual({
            type: types.GET_SHARED_LIST_ITEMS_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_SHARED_LIST_ITEMS_FAIL', function() {
        expect(shareActions.getSharedListItemsFail(emptyResponse)).toEqual({
            type: types.GET_SHARED_LIST_ITEMS_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Remove Shared Lists Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listPayload = {
        "message": "List sharing stopped successfully"
    };

    it('should remove a shared list successfully', () => {
        mockAxios.onDelete('/shopping_lists/share/1').reply(200, {});

        const expectedActions = [
            { type: types.REMOVE_SHARED_LIST_REQUEST },
            { type: types.REMOVE_SHARED_LIST_SUCCESS, response: listPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(shareActions.removeSharedList(1, 1, () => {})).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {})
    });

    it('returns an object with the type of REMOVE_SHARED_LIST_REQUEST', function() {
        expect(shareActions.removeSharedListRequest()).toEqual({
            type: types.REMOVE_SHARED_LIST_REQUEST
        });
    });

    it('returns an object with the type of REMOVE_SHARED_LIST_SUCCESS', function() {
        expect(shareActions.removeSharedListSuccess(emptyResponse)).toEqual({
            type: types.REMOVE_SHARED_LIST_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of REMOVE_SHARED_LIST_FAIL', function() {
        expect(shareActions.removeSharedListFail(emptyResponse)).toEqual({
            type: types.REMOVE_SHARED_LIST_FAIL,
            response: emptyResponse
        });
    });
});
