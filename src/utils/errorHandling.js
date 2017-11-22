import Materialize from 'materialize-css/dist/js/materialize.min';

export function catchError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        Materialize.toast(error.response.data.message, 6000, 'rounded');
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        Materialize.toast(error.request.data, 6000, 'rounded');
    } else {
        // Something happened in setting up the request that triggered an Error
        Materialize.toast(error.message, 6000, 'rounded');
    }
    Materialize.toast(error.message, 6000, 'rounded');
}
