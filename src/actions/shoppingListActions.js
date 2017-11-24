import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
const ROOT_URL = 'http://localhost:5000/v1';
const headers = {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token')
};

export function getShoppingListsSuccess(response) {
    return {
        type: actionTypes.GET_SHOPPING_LISTS,
        response
    };
}

export function getShoppingLists(page, limit) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: ROOT_URL + "/shopping_lists?page=" + page +"&limit=" + limit,
            headers: headers
        }).then(response => {
            if (response.status === 200) {
                dispatch(getShoppingListsSuccess(response));
            }
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}

export function getShoppingListSuccess(response) {
    return {
        type: actionTypes.GET_SHOPPING_LIST,
        response
    };
}

export function getShoppingList(id) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: ROOT_URL + "/shopping_lists/" + id,
            headers: headers
        }).then(response => {
            if (response.status === 200) {
                dispatch(getShoppingListSuccess(response));
            }
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}

export function createShoppingList(values) {
    const request = axios({
        method: "post",
        url: ROOT_URL + "/shopping_lists",
        headers: headers,
        data: values
    }).catch(error => {
        errorHandling.catchError(error);
    });

    return {
        type: actionTypes.CREATE_SHOPPING_LIST,
        payload: request
    };
}
