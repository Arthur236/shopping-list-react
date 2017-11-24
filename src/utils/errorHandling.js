import Materialize from 'materialize-css/dist/js/materialize.min';

export function catchError(error) {
    Materialize.toast(error.message, 6000, 'rounded');
}
