import expect from "expect";
import * as types from "../../actions/actionTypes";
import reducer from "../authReducer";
import initialState from '../initialState';

let action = {
    "type": "",
    "response": {},
    "user": {}
};

const userPayload = {
    "id": 1,
    "username": "User 1",
    "email": "user1@gmail.com",
    "password": "password"
};

describe('Test Cases For Auth Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle REGISTER_REQUEST', () => {
        action.type = types.REGISTER_REQUEST;

        let state = reducer(initialState, action);

        expect(state.registered).toBe(false);
        expect(state.loading).toBe(true);
    });

    it('should handle REGISTER_SUCCESS', () => {
        action.type = types.REGISTER_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.registered).toBe(true);
        expect(state.loading).toBe(false);
    });

    it('should handle REGISTER_FAIL', () => {
        action.type = types.REGISTER_FAIL;

        let state = reducer(initialState, action);

        expect(state.registered).toBe(false);
        expect(state.loading).toBe(false);
    });

    it('should handle LOGIN_REQUEST', () => {
        action.type = types.LOGIN_REQUEST;
        action.user = userPayload;

        let state = reducer(initialState, action);

        expect(state.loggedIn).toBe(false);
        expect(state.loading).toBe(true);
        expect(state.user).toBe("user1@gmail.com");
    });

    it('should handle LOGIN_SUCCESS', () => {
        action.type = types.LOGIN_SUCCESS;
        action.response = {
            "access_token": "some_long_token_string",
            "message": "You logged in successfully."
        };

        let state = reducer(initialState, action);

        expect(state.loggedIn).toBe(true);
        expect(state.loading).toBe(false);
    });

    it('should handle LOGIN_FAIL', () => {
        action.type = types.LOGIN_FAIL;
        action.response = {
            "message": "Login failed."
        };

        let state = reducer(initialState, action);

        expect(state.loggedIn).toBe(false);
        expect(state.loading).toBe(false);
    });

    it('should handle LOGOUT_REQUEST', () => {
        action.type = types.LOGOUT_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loggedIn).toBe(false);
    });
});
