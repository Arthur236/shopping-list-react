import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
const ROOT_URL = 'http://localhost:5000/v1';
const headers = {
    'Content-Type': 'application/json',
    'x-access-token': sessionStorage.token
};

export function getShoppingLists() {
    const request = axios({
        method: "get",
        url: ROOT_URL + "/shopping_lists",
        headers: headers
    }).then(response => {
        console.log(response);
        if (!response) {
            throw Error(response.statusText);
        }
        return response;
    }).catch(error => {
        errorHandling.catchError(error);
    });

    return {
        type: actionTypes.GET_SHOPPING_LISTS,
        payload: request
    };
}

export function getShoppingList(id) {
    const request = axios({
        method: "get",
        url: ROOT_URL + "/shopping_lists/" + id,
        headers: headers
    }).catch(error => {
        errorHandling.catchError(error);
    });

    return {
        type: actionTypes.GET_SHOPPING_LIST,
        payload: request
    };
}
