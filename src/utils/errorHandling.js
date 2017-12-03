import { showToast } from "./helpers";

export function catchError(error) {
    if (error.response) {
        showToast('error', error.response.data.message);
    } else if (error.request) {
        showToast('error', error.request.response.message);
    } else {
        showToast('error', error.message);
    }
}
