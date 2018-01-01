import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import * as listActions from '../shoppingListActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore(middleware);

describe('Tests For Get Shopping Lists Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listsPayload = {
        "total": 2,
        "next_page": "None",
        "previous_page": "None",
        "shopping_lists": [
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

    it('should get all shopping lists successfully', () => {
        mockAxios.onGet('/shopping_lists', { params: { page: 1, limit: 10 } }).reply(200, listsPayload);

        const expectedActions = [
            { type: types.GET_LISTS_REQUEST },
            { type: types.GET_LISTS_SUCCESS, response: listsPayload }
        ];

        const store = mockStore({ shoppingLists: {} });

        return store.dispatch(listActions.getLists(1, 10)).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of GET_LISTS_REQUEST', function() {
        expect(listActions.getListsRequest()).toEqual({
            type: types.GET_LISTS_REQUEST
        });
    });

    it('returns an object with the type of GET_LISTS_SUCCESS', function() {
        expect(listActions.getListsSuccess(emptyResponse)).toEqual({
            type: types.GET_LISTS_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_LISTS_FAIL', function() {
        expect(listActions.getListsFail(emptyResponse)).toEqual({
            type: types.GET_LISTS_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Get Single List Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listPayload = {
        "id": 1,
        "name": "List 1",
        "description": "Some description"
    };

    it('should get a list successfully', () => {
        mockAxios.onGet('/shopping_lists/1').reply(200, listPayload);

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.GET_SINGLE_LIST_SUCCESS, response: listPayload }
        ];

        const store = mockStore({ shoppingLists: {} });

        return store.dispatch(listActions.getSingleList(1)).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of GET_SINGLE_LIST_REQUEST', function() {
        expect(listActions.getSingleListRequest()).toEqual({
            type: types.GET_SINGLE_LIST_REQUEST
        });
    });

    it('returns an object with the type of GET_SINGLE_LIST_SUCCESS', function() {
        expect(listActions.getSingleListSuccess(emptyResponse)).toEqual({
            type: types.GET_SINGLE_LIST_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_SINGLE_LIST_FAIL', function() {
        expect(listActions.getSingleListFail(emptyResponse)).toEqual({
            type: types.GET_SINGLE_LIST_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For List Creation Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listPayload = {
        "id": 1,
        "name": "List 1",
        "description": "Some description"
    };

    it('should create a list successfully', () => {
        mockAxios.onPost('/shopping_lists').reply(201, listPayload);

        const expectedActions = [
            { type: types.CREATE_LIST_REQUEST },
            { type: types.CREATE_LIST_SUCCESS, response: listPayload }
        ];

        const store = mockStore({ shoppingLists: {} });

        return store.dispatch(listActions.createList(listPayload, () => {})).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of CREATE_LIST_REQUEST', function() {
        expect(listActions.createListRequest()).toEqual({
            type: types.CREATE_LIST_REQUEST
        });
    });

    it('returns an object with the type of CREATE_LIST_SUCCESS', function() {
        expect(listActions.createListSuccess(emptyResponse)).toEqual({
            type: types.CREATE_LIST_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of CREATE_LIST_FAIL', function() {
        expect(listActions.createListFail(emptyResponse)).toEqual({
            type: types.CREATE_LIST_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For List Edit Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listPayload = {
        "id": 1,
        "name": "List 1",
        "description": "Some description"
    };

    it('should edit a list successfully', () => {
        mockAxios.onPut('/shopping_lists/1').reply(200, listPayload);

        const expectedActions = [
            { type: types.EDIT_LIST_REQUEST },
            { type: types.EDIT_LIST_SUCCESS, response: listPayload }
        ];

        const store = mockStore({ shoppingLists: {} });

        return store.dispatch(listActions.editList(1, listPayload, () => {})).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of EDIT_LIST_REQUEST', function() {
        expect(listActions.editListRequest()).toEqual({
            type: types.EDIT_LIST_REQUEST
        });
    });

    it('returns an object with the type of EDIT_LIST_SUCCESS', function() {
        expect(listActions.editListSuccess(emptyResponse)).toEqual({
            type: types.EDIT_LIST_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of EDIT_LIST_FAIL', function() {
        expect(listActions.editListFail(emptyResponse)).toEqual({
            type: types.EDIT_LIST_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For List Deletion Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const listPayload = {
        "message": "List 1 deleted successfully"
    };

    it('should delete a list successfully', () => {
        mockAxios.onDelete('/shopping_lists/1').reply(200, listPayload);

        const expectedActions = [
            { type: types.DELETE_LIST_REQUEST },
            { type: types.DELETE_LIST_SUCCESS, response: listPayload }
        ];

        const store = mockStore({ shoppingLists: {} });

        return store.dispatch(listActions.deleteList(1, listPayload, () => {})).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of DELETE_LIST_REQUEST', function() {
        expect(listActions.deleteListRequest()).toEqual({
            type: types.DELETE_LIST_REQUEST
        });
    });

    it('returns an object with the type of DELETE_LIST_SUCCESS', function() {
        expect(listActions.deleteListSuccess(emptyResponse)).toEqual({
            type: types.DELETE_LIST_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of DELETE_LIST_FAIL', function() {
        expect(listActions.deleteListFail(emptyResponse)).toEqual({
            type: types.DELETE_LIST_FAIL,
            response: emptyResponse
        });
    });
});
