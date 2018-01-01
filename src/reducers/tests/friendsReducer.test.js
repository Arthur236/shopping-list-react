import expect from "expect";
import * as types from "../../actions/actionTypes";
import reducer from "../friendsReducer";
import initialState from '../initialState';

let action = {
    "type": "",
    "response": {}
};

describe('Test Cases For Friends Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_FRIENDS_REQUEST', () => {
        action.type = types.GET_FRIENDS_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle GET_FRIENDS_SUCCESS', () => {
        action.type = types.GET_FRIENDS_SUCCESS;
        action.response.data = {
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

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.friends.friends[0].email).toEqual("user2@gmail.com");
    });

    it('should handle GET_FRIENDS_FAIL', () => {
        action.type = types.GET_FRIENDS_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle GET_FRIEND_REQUESTS_REQUEST', () => {
        action.type = types.GET_FRIEND_REQUESTS_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle GET_FRIEND_REQUESTS_SUCCESS', () => {
        action.type = types.GET_FRIEND_REQUESTS_SUCCESS;
        action.response.data = {
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

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.friendRequests.friend_requests[1].username).toEqual("User 9");
    });

    it('should handle GET_FRIEND_REQUESTS_FAIL', () => {
        action.type = types.GET_FRIEND_REQUESTS_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle REQUEST_FRIEND_REQUEST', () => {
        action.type = types.REQUEST_FRIEND_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle REQUEST_FRIEND_SUCCESS', () => {
        action.type = types.REQUEST_FRIEND_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle REQUEST_FRIEND_FAIL', () => {
        action.type = types.REQUEST_FRIEND_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle ACCEPT_FRIEND_REQUEST_REQUEST', () => {
        action.type = types.ACCEPT_FRIEND_REQUEST_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle ACCEPT_FRIEND_REQUEST_SUCCESS', () => {
        action.type = types.ACCEPT_FRIEND_REQUEST_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle ACCEPT_FRIEND_REQUEST_FAIL', () => {
        action.type = types.ACCEPT_FRIEND_REQUEST_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle DELETE_FRIEND_REQUEST', () => {
        action.type = types.DELETE_FRIEND_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle DELETE_FRIEND_SUCCESS', () => {
        action.type = types.DELETE_FRIEND_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle DELETE_FRIEND_FAIL', () => {
        action.type = types.DELETE_FRIEND_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });
});
