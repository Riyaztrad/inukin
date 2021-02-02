
import { LOGIN } from './actionType'
export const setUserData = data => {
    return {
        type: LOGIN,
        payload: data,
    };
};
