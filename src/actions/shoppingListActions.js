import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// Fetch all shopping lists

export function getLists(page, limit) {
    return function (dispatch) {
        dispatch(getListsRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/shopping_lists?page=" + page +"&limit=" + limit
        }).then(response => {
            if (response.status === 200) {
                dispatch(getListsSuccess(response));
            } else {
                dispatch(getListsFail(response));
            }
        }).catch(error => {
            dispatch(getListsFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function getListsRequest() {
    return {
        type: actionTypes.GET_LISTS_REQUEST,
    };
}

export function getListsSuccess(response) {
    return {
        type: actionTypes.GET_LISTS_SUCCESS,
        response
    };
}

export function getListsFail(response) {
    return {
        type: actionTypes.GET_LISTS_FAIL,
        response
    };
}

// Fetch a single shopping list

export function getSingleList(id) {
    return function (dispatch) {
        dispatch(getSingleListRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/shopping_lists/" + id
        }).then(response => {
            if (response.status === 200) {
                dispatch(getSingleListSuccess(response));
            } else {
                dispatch(getSingleListFail(response));
            }
        }).catch(error => {
            dispatch(getSingleListFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function getSingleListRequest() {
    return {
        type: actionTypes.GET_SINGLE_LIST_REQUEST,
    };
}

export function getSingleListSuccess(response) {
    return {
        type: actionTypes.GET_SINGLE_LIST_SUCCESS,
        response
    };
}

export function getSingleListFail(response) {
    return {
        type: actionTypes.GET_SINGLE_LIST_FAIL,
        response
    };
}

// Shopping list creation

export function createList(values, callback) {
    return function (dispatch) {
        dispatch(createListRequest());

        return axios({
            method: "post",
            url: helpers.ROOT_URL + "/shopping_lists",
            data: values

        }).then(response => {
            if (response.status === 201) {
                helpers.showToast('success', "List created successfully");

                dispatch(createListSuccess(response));
                callback();
            } else {
                dispatch(createListFail(response));
            }
        }).catch(error => {
            dispatch(createListFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function createListRequest() {
    return {
        type: actionTypes.CREATE_LIST_REQUEST,
    };
}

export function createListSuccess(response) {
    return {
        type: actionTypes.CREATE_LIST_SUCCESS,
        response
    };
}

export function createListFail(response) {
    return {
        type: actionTypes.CREATE_LIST_FAIL,
        response
    };
}

// Shopping list edit

export function editList(id, values, callback) {
    return function (dispatch) {
        dispatch(editListRequest());

        return axios({
            method: "put",
            url: helpers.ROOT_URL + "/shopping_lists/" + id,
            data: values

        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(editListSuccess(response));
                callback();
            } else {
                dispatch(editListFail(response));
            }
        }).catch(error => {
            dispatch(editListFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function editListRequest() {
    return {
        type: actionTypes.EDIT_LIST_REQUEST,
    };
}

export function editListSuccess(response) {
    return {
        type: actionTypes.EDIT_LIST_SUCCESS,
        response
    };
}

export function editListFail(response) {
    return {
        type: actionTypes.EDIT_LIST_FAIL,
        response
    };
}

// Delete list

export function deleteList(id, callback) {
    return function (dispatch) {
        dispatch(deleteListRequest());

        return axios({
            method: "delete",
            url: helpers.ROOT_URL + "/shopping_lists/" + id,
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(deleteListSuccess(response, id));
                callback();
            } else {
                dispatch(deleteListFail(response));
            }
        }).catch(error => {
            dispatch(deleteListFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function deleteListRequest() {
    return {
        type: actionTypes.DELETE_LIST_REQUEST,
    };
}

export function deleteListSuccess(response, id) {
    return {
        type: actionTypes.DELETE_LIST_SUCCESS,
        response,
        id
    };
}

export function deleteListFail(response) {
    return {
        type: actionTypes.DELETE_LIST_FAIL,
        response
    };
}
