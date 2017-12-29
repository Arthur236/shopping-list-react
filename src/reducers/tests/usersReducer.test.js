import expect from "expect";
import * as types from "../../actions/actionTypes";
import reducer from "../usersReducer";
import initialState from '../initialState';

let action = {
    "type": "",
    "response": {}
};

describe('Test Cases For Users Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SEARCH_USER_REQUEST', () => {
        action.type = types.SEARCH_USER_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle SEARCH_USER_SUCCESS', () => {
        action.type = types.SEARCH_USER_SUCCESS;
        action.response.data = [
            {
                "id": 1,
                "username": "User 1",
                "email": "user1@gmail.com"
            }
        ];

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.friends[0].username).toEqual("User 1");
    });

    it('should handle SEARCH_USER_FAIL', () => {
        action.type = types.SEARCH_USER_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });
});
