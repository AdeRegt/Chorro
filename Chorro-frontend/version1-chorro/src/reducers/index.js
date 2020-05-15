import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';
import addChildReducer from './addChildReducer'
import loginRegisterReducer from './loginRegisterReducer';
import dataTableReducer from './dataTableReducer';

export default combineReducers({
    // papa: () => "paranoja"
    // when you don't have any reducer
    auth:authReducer,
    form: formReducer,
    loginRegister: loginRegisterReducer,
    listOfNames: addChildReducer,
    parentTable: dataTableReducer,
})