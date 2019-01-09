import {combineReducers} from 'redux';
import {authReducer} from "./userReducer";
import {navigationReducer} from "./navigationReducer";

const allReducers = combineReducers({
    auth: authReducer,
    navigation: navigationReducer,
});

export default allReducers