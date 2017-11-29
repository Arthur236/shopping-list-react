import axios from 'axios';
import Materialize from 'materialize-css/dist/js/materialize.min';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

const headers = {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token')
};

// Fetch all shopping lists

export function getLists(page, limit) {
    return function (dispatch) {
        dispatch(getListsRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/shopping_lists?page=" + page +"&limit=" + limit,
            headers: headers
        }).then(response => {
            if (response.status === 200) {
                dispatch(getListsSuccess(response));
            } else {
                dispatch(getListsFail(response));
            }
        }).catch(error => {
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
            url: helpers.ROOT_URL + "/shopping_lists/" + id,
            headers: headers
        }).then(response => {
            if (response.status === 200) {
                dispatch(getSingleListSuccess(response));
            } else {
                dispatch(getSingleListFail(response));
            }
        }).catch(error => {
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
            headers: headers,
            data: values

        }).then(response => {
            if (response.status === 201) {
                Materialize.toast("List created successfully", 6000, 'rounded');

                dispatch(createListSuccess(response));
                callback();
            } else {
                dispatch(createListFail(response));
            }
        }).catch(error => {
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
            headers: headers,
            data: values

        }).then(response => {
            if (response.status === 200) {
                Materialize.toast("List edited successfully", 6000, 'rounded');

                dispatch(editListSuccess(response));
                callback();
            } else {
                dispatch(editListFail(response));
            }
        }).catch(error => {
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
