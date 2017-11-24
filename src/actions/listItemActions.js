import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

// const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
const ROOT_URL = 'http://localhost:5000/v1';
const headers = {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token')
};

export function getListItemsSuccess(response) {
    return {
        type: actionTypes.GET_LIST_ITEMS,
        response
    };
}

export function getListItems(list, page, limit) {
    return function (dispatch) {
        return axios({
            method: "get",
            url: ROOT_URL + "/shopping_lists/" + list + "/items?page=" + page +"&limit=" + limit,
            headers: headers
        }).then(response => {
            dispatch(getListItemsSuccess(response));
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}
