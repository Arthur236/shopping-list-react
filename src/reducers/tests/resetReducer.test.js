import expect from "expect";
import * as types from "../../actions/actionTypes";
import reducer from "../resetReducer";
import initialState from '../initialState';

let action = {
    "type": "",
    "response": {}
};

describe('Test Cases For Reset Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SEND_RESET_REQUEST_REQUEST', () => {
        action.type = types.SEND_RESET_REQUEST_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle SEND_RESET_REQUEST_SUCCESS', () => {
        action.type = types.SEND_RESET_REQUEST_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle SEND_RESET_REQUEST_FAIL', () => {
        action.type = types.SEND_RESET_REQUEST_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle PASSWORD_RESET_REQUEST', () => {
        action.type = types.PASSWORD_RESET_REQUEST;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(true);
    });

    it('should handle PASSWORD_RESET_SUCCESS', () => {
        action.type = types.PASSWORD_RESET_SUCCESS;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });

    it('should handle PASSWORD_RESET_FAIL', () => {
        action.type = types.PASSWORD_RESET_FAIL;

        let state = reducer(initialState, action);

        expect(state.loading).toBe(false);
    });
});
