import { LOGIN } from './actionType';


var initialState = {
    data: null
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
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

export { loginReducer }