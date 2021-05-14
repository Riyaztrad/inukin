import { act } from 'react-test-renderer';
import { LOGIN } from './actionType';


var initialState = {
    data: null
}


const loginReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case LOGIN:
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