import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    // papa: () => "paranoja"
    // when you don't have any reducer
    auth:authReducer
})