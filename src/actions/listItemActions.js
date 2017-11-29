import axios from 'axios';
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
