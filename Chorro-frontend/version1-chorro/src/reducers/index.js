import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
    // papa: () => "paranoja"
    // when you don't have any reducer
    auth:authReducer,
    form: formReducer,
})