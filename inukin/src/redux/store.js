import { combineReducers } from "redux";
import { loginReducer } from '../screens/loginScreen/reducer'
const allReducers = combineReducers({
    loginReducer:loginReducer
})

export default allReducers