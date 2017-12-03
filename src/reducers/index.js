import { combineReducers } from 'redux-immutable';
import loginReducer from './loginReducer'
import navReducer from "./navReducer";

export default combineReducers({
    login: loginReducer,
    nav:navReducer
});