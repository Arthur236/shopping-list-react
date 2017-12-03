import {notify} from 'react-notify-toast';

// export const ROOT_URL = 'https://awesome-shopping-list-api.herokuapp.com/v1';
export const ROOT_URL = 'http://localhost:5000/v1';

export function showToast(type, message) {
    notify.show(message, type, 3000);
}
