import { combineReducers } from "redux";
import { loginReducer } from '../screens/loginScreen/reducer'
import {userInfoReducer} from '../screens/profileScreen/reducers'
const allReducers = combineReducers({
    loginReducer,
    userInfoReducer
})

export default allReducers