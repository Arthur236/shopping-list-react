import expect from "expect";
import * as types from "../../actions/actionTypes";
import reducer from "../listItemsReducer";
import initialState from '../initialState';

let action = {
    "type": "",
    "response": {}
};

describe('Test Cases For List Items Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_ITEMS_REQUEST', () => {
        action.type = types.GET_ITEMS_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle GET_ITEMS_SUCCESS', () => {
        action.type = types.GET_ITEMS_SUCCESS;
        action.response.data = {
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

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.listItems.shopping_list_items[0].name).toEqual("Item 1");
    });

    it('should handle GET_ITEMS_FAIL', () => {
        action.type = types.GET_ITEMS_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle GET_SINGLE_ITEM_REQUEST', () => {
        action.type = types.GET_SINGLE_ITEM_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle GET_SINGLE_ITEM_SUCCESS', () => {
        action.type = types.GET_SINGLE_ITEM_SUCCESS;
        action.response.data = {
            "id": 1,
            "name": "God of War",
            "quantity": 1,
            "unit_price": 5500
        };

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.activeItem.name).toEqual("God of War");
    });

    it('should handle GET_SINGLE_ITEM_FAIL', () => {
        action.type = types.GET_SINGLE_ITEM_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle CREATE_ITEM_REQUEST', () => {
        action.type = types.CREATE_ITEM_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle CREATE_ITEM_SUCCESS', () => {
        action.type = types.CREATE_ITEM_SUCCESS;
        action.response.data = {
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

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.listItems.shopping_list_items[1].name).toEqual("Item 2");
    });

    it('should handle CREATE_ITEM_FAIL', () => {
        action.type = types.CREATE_ITEM_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle EDIT_ITEM_REQUEST', () => {
        action.type = types.EDIT_ITEM_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle EDIT_ITEM_SUCCESS', () => {
        action.type = types.EDIT_ITEM_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle EDIT_ITEM_FAIL', () => {
        action.type = types.EDIT_ITEM_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle DELETE_ITEM_REQUEST', () => {
        action.type = types.DELETE_ITEM_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle DELETE_ITEM_SUCCESS', () => {
        action.type = types.DELETE_ITEM_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle DELETE_ITEM_FAIL', () => {
        action.type = types.DELETE_ITEM_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });
});
