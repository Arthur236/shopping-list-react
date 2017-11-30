import axios from 'axios';
import Materialize from 'materialize-css/dist/js/materialize.min';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

const headers = {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token')
};

export function getItemsRequest() {
    return {
        type: actionTypes.GET_ITEMS_REQUEST
    };
}

export function getItemsSuccess(response) {
    return {
        type: actionTypes.GET_ITEMS_SUCCESS,
        response
    };
}

export function getItemsFail(response) {
    return {
        type: actionTypes.GET_ITEMS_FAIL,
        response
    };
}

export function getListItems(id, page, limit) {
    return function (dispatch) {
        dispatch(getItemsRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/shopping_lists/" + id + "/items?page=" + page +"&limit=" + limit,
            headers: headers
        }).then(response => {
            if (response.status === 200) {
                dispatch(getItemsSuccess(response));
            } else {
                dispatch(getItemsFail(response));
            }
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}

// Shopping list creation

export function createItem(id, values, callback) {
    return function (dispatch) {
        dispatch(createItemRequest());

        return axios({
            method: "post",
            url: helpers.ROOT_URL + "/shopping_lists/" + id + "/items",
            headers: headers,
            data: values

        }).then(response => {
            if (response.status === 201) {
                Materialize.toast("List created successfully", 6000, 'rounded');

                dispatch(createItemSuccess(response));
                callback();
            } else {
                dispatch(createItemFail(response));
            }
        }).catch(error => {
            errorHandling.catchError(error);
        });
    }
}

export function createItemRequest() {
    return {
        type: actionTypes.CREATE_ITEM_REQUEST,
    };
}

export function createItemSuccess(response) {
    return {
        type: actionTypes.CREATE_ITEM_SUCCESS,
        response
    };
}

export function createItemFail(response) {
    return {
        type: actionTypes.CREATE_ITEM_FAIL,
        response
    };
}
