import expect from 'expect';
import React from 'react';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import Notifications from 'react-notify-toast';
import * as listItemActions from '../listItemActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Tests For Get List Items Actions', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
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
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: itemsPayload
            });
        });

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.GET_ITEMS_REQUEST },
            { type: types.GET_ITEMS_SUCCESS, response: itemsPayload }
        ];

        const store = mockStore({ listItems: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(listItemActions.getListItems(1, 1, 10)).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
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
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const itemPayload = {
        "id": 1,
        "name": "God of War",
        "quantity": 1,
        "unit_price": 5500
    };

    it('should get a list item successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: itemPayload
            });
        });

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.GET_SINGLE_ITEM_REQUEST },
            { type: types.GET_SINGLE_ITEM_SUCCESS, response: itemPayload }
        ];

        const store = mockStore({ listItems: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(listItemActions.getSingleItem(1, 1)).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
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
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const itemPayload = {
        "id": 1,
        "name": "God of War",
        "quantity": 1,
        "unit_price": 5500
    };

    it('should create a list item successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 201,
                response: itemPayload
            });
        });

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.CREATE_ITEM_REQUEST },
            { type: types.CREATE_ITEM_SUCCESS, response: itemPayload }
        ];

        const store = mockStore({ listItems: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(listItemActions.createItem(1, itemPayload, () => {})).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
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
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const itemPayload = {
        "id": 1,
        "name": "God of War",
        "quantity": 12,
        "unit_price": 5500
    };

    it('should edit a list item successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: itemPayload
            });
        });

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.EDIT_ITEM_REQUEST },
            { type: types.EDIT_ITEM_SUCCESS, response: itemPayload }
        ];

        const store = mockStore({ listItems: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(listItemActions.editItem(1, 1, itemPayload, () => {})).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
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
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const emptyResponse = {};
    const itemPayload = {
        "message": "Item 1 deleted successfully"
    };

    it('should delete a list item successfully', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: itemPayload
            });
        });

        const expectedActions = [
            { type: types.GET_SINGLE_LIST_REQUEST },
            { type: types.DELETE_ITEM_REQUEST },
            { type: types.DELETE_ITEM_SUCCESS, response: itemPayload }
        ];

        const store = mockStore({ listItems: {} });

        return [
            <Notifications key={1}/>,

            store.dispatch(listItemActions.deleteItem(1, 1, itemPayload, () => {})).then(() => {

                const dispatchedActions = store.getActions();
                const actionTypes = dispatchedActions.map(action => action.type);

                expect(actionTypes).toEqual(expectedActions);
            })
        ];
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
