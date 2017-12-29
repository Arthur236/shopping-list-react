import expect from "expect";
import * as types from "../../actions/actionTypes";
import reducer from "../shareReducer";
import initialState from '../initialState';

let action = {
    "type": "",
    "response": {}
};

describe('Test Cases For Share Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SHARE_LIST_REQUEST', () => {
        action.type = types.SHARE_LIST_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle SHARE_LIST_SUCCESS', () => {
        action.type = types.SHARE_LIST_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle SHARE_LIST_FAIL', () => {
        action.type = types.SHARE_LIST_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle GET_SHARED_LISTS_REQUEST', () => {
        action.type = types.GET_SHARED_LISTS_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle GET_SHARED_LISTS_SUCCESS', () => {
        action.type = types.GET_SHARED_LISTS_SUCCESS;
        action.response.data = {
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

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.share.shared_lists[0].name).toEqual("List 1");
    });

    it('should handle GET_SHARED_LISTS_FAIL', () => {
        action.type = types.GET_SHARED_LISTS_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle GET_SHARED_LIST_ITEMS_REQUEST', () => {
        action.type = types.GET_SHARED_LIST_ITEMS_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle GET_SHARED_LIST_ITEMS_SUCCESS', () => {
        action.type = types.GET_SHARED_LIST_ITEMS_SUCCESS;
        action.response.data = {
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

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.listItems.shared_list_items[0].name).toEqual("Item 1");
    });

    it('should handle GET_SHARED_LIST_ITEMS_FAIL', () => {
        action.type = types.GET_SHARED_LIST_ITEMS_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle REMOVE_SHARED_LIST_REQUEST', () => {
        action.type = types.REMOVE_SHARED_LIST_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle REMOVE_SHARED_LIST_SUCCESS', () => {
        action.type = types.REMOVE_SHARED_LIST_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle REMOVE_SHARED_LIST_FAIL', () => {
        action.type = types.REMOVE_SHARED_LIST_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });
});
