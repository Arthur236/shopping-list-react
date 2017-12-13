import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';
import { getSingleList } from "./shoppingListActions";

// Share a list

export function shareList(values) {
    return function (dispatch) {
        dispatch(shareListRequest());

        return axios({
            method: "post",
            url: helpers.ROOT_URL + "/shopping_lists/share",
            data: values
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(shareListSuccess(response));
            } else {
                dispatch(shareListFail(response));
            }
        }).catch(error => {
            dispatch(shareListFail(error));
            errorHandling.catchError(error);
        });
    };
}

export function shareListRequest() {
    return {
        type: actionTypes.SHARE_LIST_REQUEST,
    };
}

export function shareListSuccess(response) {
    return {
        type: actionTypes.SHARE_LIST_REQUEST,
        response
    };
}

export function shareListFail(response) {
    return {
        type: actionTypes.SHARE_LIST_FAIL,
        response
    };
}

// Fetch all shared lists

export function getSharedLists(page, limit) {
    return function (dispatch) {
        dispatch(getSharedListsRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/shopping_lists/share?page=" + page +"&limit=" + limit
        }).then(response => {
            if (response.status === 200) {
                dispatch(getSharedListsSuccess(response));
            } else {
                dispatch(getSharedListsFail(response));
            }
        }).catch(error => {
            dispatch(getSharedListsFail(error));
            errorHandling.catchError(error);
        });
    };
}

export function getSharedListsRequest() {
    return {
        type: actionTypes.GET_SHARED_LISTS_REQUEST,
    };
}

export function getSharedListsSuccess(response) {
    return {
        type: actionTypes.GET_SHARED_LISTS_SUCCESS,
        response
    };
}

export function getSharedListsFail(response) {
    return {
        type: actionTypes.GET_SHARED_LISTS_FAIL,
        response
    };
}

// Fetch all shared shopping list items

export function getSharedListItems(id, page, limit) {
    return function (dispatch) {
        dispatch(getSingleList(id));
        dispatch(getSharedListItemsRequest());

        return axios({
            method: "get",
            url: helpers.ROOT_URL + "/shopping_lists/share/" + id + "/items?page=" + page +"&limit=" + limit
        }).then(response => {
            if (response.status === 200) {
                dispatch(getSharedListItemsSuccess(response));
            } else {
                dispatch(getSharedListItemsFail(response));
            }
        }).catch(error => {
            dispatch(getSharedListItemsFail(error));
            errorHandling.catchError(error);
        });
    };
}

export function getSharedListItemsRequest() {
    return {
        type: actionTypes.GET_SHARED_LIST_ITEMS_REQUEST
    };
}

export function getSharedListItemsSuccess(response) {
    return {
        type: actionTypes.GET_SHARED_LIST_ITEMS_SUCCESS,
        response
    };
}

export function getSharedListItemsFail(response) {
    return {
        type: actionTypes.GET_SHARED_LIST_ITEMS_FAIL,
        response
    };
}

// Remove shared list

export function removeSharedList(user_id, list_id, callback) {
    return function (dispatch) {
        dispatch(removeSharedListRequest());

        return axios({
            method: "delete",
            url: helpers.ROOT_URL + "/shopping_lists/share/" + list_id,
            data: user_id
        }).then(response => {
            if (response.status === 200) {
                helpers.showToast('success', response.data.message);

                dispatch(removeSharedListSuccess(response, list_id));
                callback();
            } else {
                dispatch(removeSharedListFail(response));
            }
        }).catch(error => {
            dispatch(removeSharedListFail(error));
            errorHandling.catchError(error);
        });
    };
}

export function removeSharedListRequest() {
    return {
        type: actionTypes.REMOVE_SHARED_LIST_REQUEST,
    };
}

export function removeSharedListSuccess(response, id) {
    return {
        type: actionTypes.REMOVE_SHARED_LIST_SUCCESS,
        response,
        id
    };
}

export function removeSharedListFail(response) {
    return {
        type: actionTypes.REMOVE_SHARED_LIST_FAIL,
        response
    };
}
