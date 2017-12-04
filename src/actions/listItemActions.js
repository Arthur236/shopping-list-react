import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';
import { getSingleList } from "./shoppingListActions";

// Fetch all shopping list items

export function getListItems(id, page, limit) {
    return function (dispatch) {
        dispatch(getSingleList(id));
        dispatch(getItemsRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/shopping_lists/" + id + "/items?page=" + page +"&limit=" + limit
        }).then(response => {
            if (response.status === 200) {
                dispatch(getItemsSuccess(response));
            } else {
                dispatch(getItemsFail(response));
            }
        }).catch(error => {
            dispatch(getItemsFail(error));
            errorHandling.catchError(error);
        });
    }
}

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

// Fetch a single shopping list item

export function getSingleItem(id, item_id) {
    return function (dispatch) {
        dispatch(getSingleItemRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/shopping_lists/" + id + "/items/" + item_id
        }).then(response => {
            if (response.status === 200) {
                dispatch(getSingleItemSuccess(response));
            } else {
                dispatch(getSingleItemFail(response));
            }
        }).catch(error => {
            dispatch(getSingleItemFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function getSingleItemRequest() {
    return {
        type: actionTypes.GET_SINGLE_ITEM_REQUEST,
    };
}

export function getSingleItemSuccess(response) {
    return {
        type: actionTypes.GET_SINGLE_ITEM_SUCCESS,
        response
    };
}

export function getSingleItemFail(response) {
    return {
        type: actionTypes.GET_SINGLE_ITEM_FAIL,
        response
    };
}

// Shopping list item creation

export function createItem(id, values, callback) {
    return function (dispatch) {
        dispatch(createItemRequest());

        return axios({
            method: "post",
            url: helpers.ROOT_URL + "/shopping_lists/" + id + "/items",
            data: values

        }).then(response => {
            if (response.status === 201) {
                helpers.showToast('success', "Item created successfully");

                dispatch(createItemSuccess(response));
                callback();
            } else {
                dispatch(createItemFail(response));
            }
        }).catch(error => {
            dispatch(createItemFail(error));
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

// Shopping list item edit

export function editItem(id, item_id, values, callback) {
    return function (dispatch) {
        dispatch(editItemRequest());

        return axios({
            method: "put",
            url: helpers.ROOT_URL + "/shopping_lists/" + id + "/items/" +item_id,
            data: values

        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', "Item edited successfully");

                dispatch(editItemSuccess(response));
                callback();
            } else {
                dispatch(editItemFail(response));
            }
        }).catch(error => {
            dispatch(editItemFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function editItemRequest() {
    return {
        type: actionTypes.EDIT_ITEM_REQUEST,
    };
}

export function editItemSuccess(response) {
    return {
        type: actionTypes.EDIT_ITEM_SUCCESS,
        response
    };
}

export function editItemFail(response) {
    return {
        type: actionTypes.EDIT_ITEM_FAIL,
        response
    };
}

// Delete item

export function deleteItem(id, item_id, callback) {
    return function (dispatch) {
        dispatch(deleteItemRequest());

        return axios({
            method: "delete",
            url: helpers.ROOT_URL + "/shopping_lists/" + id + "/items/" + item_id
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(deleteItemSuccess(response));
                callback();
            } else {
                dispatch(deleteItemFail(response));
            }
        }).catch(error => {
            dispatch(deleteItemFail(error));
            errorHandling.catchError(error);
        });
    }
}

export function deleteItemRequest() {
    return {
        type: actionTypes.DELETE_ITEM_REQUEST,
    };
}

export function deleteItemSuccess(response) {
    return {
        type: actionTypes.DELETE_ITEM_SUCCESS,
        response
    };
}

export function deleteItemFail(response) {
    return {
        type: actionTypes.DELETE_ITEM_FAIL,
        response
    };
}
