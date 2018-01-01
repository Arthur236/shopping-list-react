import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import * as listItemActions from '../listItemActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore(middleware);

describe('Tests For Get List Items Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const itemsPayload = {
        "total": 2,
        "next_page": "None",
        "previous_page": "None",
        "shopping_list_items": [
            {
                "id": 1,
                "name": "Item 1",
                "quantity": 2,
                "unit_price": 800
            },
            {
                "id": 2,
                "name": "Item 2",
                "quantity": 1,
                "unit_price": 400
            }
        ]
    };

    it('should get all list items successfully', () => {
        mockAxios.onGet('/shopping_lists/1/items', { params: { page: 1, limit: 10 } }).reply(200, itemsPayload);

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.GET_ITEMS_REQUEST },
            { type: types.GET_ITEMS_SUCCESS, response: itemsPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(listItemActions.getListItems(1, 1, 10)).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of GET_ITEMS_REQUEST', function() {
        expect(listItemActions.getItemsRequest()).toEqual({
            type: types.GET_ITEMS_REQUEST
        });
    });

    it('returns an object with the type of GET_ITEMS_SUCCESS', function() {
        expect(listItemActions.getItemsSuccess(emptyResponse)).toEqual({
            type: types.GET_ITEMS_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_ITEMS_FAIL', function() {
        expect(listItemActions.getItemsFail(emptyResponse)).toEqual({
            type: types.GET_ITEMS_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For Get Single List Item Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const itemPayload = {
        "id": 1,
        "name": "God of War",
        "quantity": 1,
        "unit_price": 5500
    };

    it('should get a list item successfully', () => {
        mockAxios.onGet('/shopping_lists/1/items/1').reply(200, itemPayload);

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.GET_SINGLE_ITEM_REQUEST },
            { type: types.GET_SINGLE_ITEM_SUCCESS, response: itemPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(listItemActions.getSingleItem(1, 1)).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of GET_SINGLE_ITEM_REQUEST', function() {
        expect(listItemActions.getSingleItemRequest()).toEqual({
            type: types.GET_SINGLE_ITEM_REQUEST
        });
    });

    it('returns an object with the type of GET_SINGLE_ITEM_SUCCESS', function() {
        expect(listItemActions.getSingleItemSuccess(emptyResponse)).toEqual({
            type: types.GET_SINGLE_ITEM_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of GET_SINGLE_ITEM_FAIL', function() {
        expect(listItemActions.getSingleItemFail(emptyResponse)).toEqual({
            type: types.GET_SINGLE_ITEM_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For List Item Creation Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const itemPayload = {
        "id": 1,
        "name": "God of War",
        "quantity": 1,
        "unit_price": 5500
    };

    it('should create a list item successfully', () => {
        mockAxios.onPost('/shopping_lists/1/items').reply(201, itemPayload);

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.CREATE_ITEM_REQUEST },
            { type: types.CREATE_ITEM_SUCCESS, response: itemPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(listItemActions.createItem(1, itemPayload, () => {})).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of CREATE_ITEM_REQUEST', function() {
        expect(listItemActions.createItemRequest()).toEqual({
            type: types.CREATE_ITEM_REQUEST
        });
    });

    it('returns an object with the type of CREATE_ITEM_SUCCESS', function() {
        expect(listItemActions.createItemSuccess(emptyResponse)).toEqual({
            type: types.CREATE_ITEM_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of CREATE_ITEM_FAIL', function() {
        expect(listItemActions.createItemFail(emptyResponse)).toEqual({
            type: types.CREATE_ITEM_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For List Item Edit Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const itemPayload = {
        "id": 1,
        "name": "God of War",
        "quantity": 12,
        "unit_price": 5500
    };

    it('should edit a list item successfully', () => {
        mockAxios.onPut('/shopping_lists/1/items/1').reply(200, itemPayload);

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.EDIT_ITEM_REQUEST },
            { type: types.EDIT_ITEM_SUCCESS, response: itemPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(listItemActions.editItem(1, 1, itemPayload, () => {})).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of EDIT_ITEM_REQUEST', function() {
        expect(listItemActions.editItemRequest()).toEqual({
            type: types.EDIT_ITEM_REQUEST
        });
    });

    it('returns an object with the type of EDIT_ITEM_SUCCESS', function() {
        expect(listItemActions.editItemSuccess(emptyResponse)).toEqual({
            type: types.EDIT_ITEM_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of EDIT_ITEM_FAIL', function() {
        expect(listItemActions.editItemFail(emptyResponse)).toEqual({
            type: types.EDIT_ITEM_FAIL,
            response: emptyResponse
        });
    });
});

describe('Tests For List Item Deletion Actions', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const emptyResponse = {};
    const itemPayload = {
        "message": "Item 1 deleted successfully"
    };

    it('should delete a list item successfully', () => {
        mockAxios.onDelete('/shopping_lists/1/items/1').reply(200, itemPayload);

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.DELETE_ITEM_REQUEST },
            { type: types.DELETE_ITEM_SUCCESS, response: itemPayload }
        ];

        const store = mockStore({ listItems: {} });

        return store.dispatch(listItemActions.deleteItem(1, 1, itemPayload, () => {})).then(() => {

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        }).catch(() => {});
    });

    it('returns an object with the type of DELETE_ITEM_REQUEST', function() {
        expect(listItemActions.deleteItemRequest()).toEqual({
            type: types.DELETE_ITEM_REQUEST
        });
    });

    it('returns an object with the type of DELETE_ITEM_SUCCESS', function() {
        expect(listItemActions.deleteItemSuccess(emptyResponse)).toEqual({
            type: types.DELETE_ITEM_SUCCESS,
            response: emptyResponse
        });
    });

    it('returns an object with the type of DELETE_ITEM_FAIL', function() {
        expect(listItemActions.deleteItemFail(emptyResponse)).toEqual({
            type: types.DELETE_ITEM_FAIL,
            response: emptyResponse
        });
    });
});
