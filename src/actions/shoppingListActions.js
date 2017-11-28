import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
const ROOT_URL = 'http://localhost:5000/v1';
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
            url: ROOT_URL + "/shopping_lists?page=" + page +"&limit=" + limit,
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
            url: ROOT_URL + "/shopping_lists/" + id,
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

export function createList(values) {
    return function (dispatch) {
        dispatch(createListRequest());

        return axios({
            method: "post",
            url: ROOT_URL + "/shopping_lists",
            headers: headers,
            data: values

        }).then(response => {
            if (response.status === 201) {
                dispatch(createListSuccess(response));
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
