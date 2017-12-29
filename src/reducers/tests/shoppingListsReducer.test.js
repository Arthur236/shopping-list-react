import expect from "expect";
import * as types from "../../actions/actionTypes";
import reducer from "../shoppingListsReducer";
import initialState from '../initialState';

let action = {
    "type": "",
    "response": {}
};

describe('Test Cases For Shopping Lists Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_LISTS_REQUEST', () => {
        action.type = types.GET_LISTS_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle GET_LISTS_SUCCESS', () => {
        action.type = types.GET_LISTS_SUCCESS;
        action.response.data = {
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

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.shoppingLists.shopping_lists[0].name).toEqual("List 1");
    });

    it('should handle GET_LISTS_FAIL', () => {
        action.type = types.GET_LISTS_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle GET_SINGLE_LIST_REQUEST', () => {
        action.type = types.GET_SINGLE_LIST_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle GET_SINGLE_LIST_SUCCESS', () => {
        action.type = types.GET_SINGLE_LIST_SUCCESS;
        action.response.data = {
            "id": 1,
            "name": "List 1",
            "description": "Some description"
        };

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.activeList.name).toEqual("List 1");
    });

    it('should handle GET_SINGLE_LIST_FAIL', () => {
        action.type = types.GET_SINGLE_LIST_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle CREATE_LIST_REQUEST', () => {
        action.type = types.CREATE_LIST_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle CREATE_LIST_SUCCESS', () => {
        action.type = types.CREATE_LIST_SUCCESS;
        action.response.data = {
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

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.shoppingLists.shopping_lists[1].name).toEqual("List 2");
    });

    it('should handle CREATE_LIST_FAIL', () => {
        action.type = types.CREATE_LIST_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle EDIT_LIST_REQUEST', () => {
        action.type = types.EDIT_LIST_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle EDIT_LIST_SUCCESS', () => {
        action.type = types.EDIT_LIST_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle EDIT_LIST_FAIL', () => {
        action.type = types.EDIT_LIST_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle DELETE_LIST_REQUEST', () => {
        action.type = types.DELETE_LIST_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle DELETE_LIST_SUCCESS', () => {
        action.type = types.DELETE_LIST_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle DELETE_LIST_FAIL', () => {
        action.type = types.DELETE_LIST_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });
});
