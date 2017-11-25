import Materialize from 'materialize-css/dist/js/materialize.min';

export function catchError(error) {
    if (error.response) {
        Materialize.toast(error.response.data.message, 6000, 'rounded');
    } else if (error.request) {
        Materialize.toast(error.request.response.message, 6000, 'rounded');
    } else {
        Materialize.toast(error.message, 6000, 'rounded');
    }
}
