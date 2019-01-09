import {combineReducers} from 'redux';
import {authReducer} from "./userReducer";

const allReducers = combineReducers({
    auth: authReducer,
});

export default allReducers