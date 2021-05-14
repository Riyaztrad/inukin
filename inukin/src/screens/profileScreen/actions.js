
import { USERINFO } from './actionType'
export const setUserInfo = data => {
    return {
        type: USERINFO,
        payload: data,
    };
};

