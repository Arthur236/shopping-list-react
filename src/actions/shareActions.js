import axios from 'axios';
import * as helpers from '../utils/helpers';
import * as actionTypes from './actionTypes';
import * as errorHandling from '../utils/errorHandling';

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
                dispatch(shareListSuccess(response));
            } else {
                dispatch(shareListFail(response));
            }
        }).catch(error => {
            dispatch(shareListFail(error));
            errorHandling.catchError(error);
        });
    }
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
