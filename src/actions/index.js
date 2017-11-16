import axios from 'axios';
import * as actionTypes from './actionTypes';

const ROOT_URL = '';

export function register() {
    //const request = axios.post(``);
    const request = console.log("register triggered");

    return {
        type: actionTypes.REGISTER_REQUEST,
        payload: request
    };
}