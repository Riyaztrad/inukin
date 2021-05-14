
import { USERINFO } from './actionType';


var initialState = {
    data: null
}


const userInfoReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case USERINFO:
            console.log("action", action)
            return {
                ...state,
                data: action.payload,
                isLoading: true
            };
            break;

        default:
            return state;
    }
}

export { userInfoReducer }