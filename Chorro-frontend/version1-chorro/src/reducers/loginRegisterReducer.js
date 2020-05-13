import {LOGIN_REGISTER} from '../actions/types';


export default (state = {}, action) => {
    switch(action.type){
        case LOGIN_REGISTER:
            return {...state, [action.payload.id]:action.payload};
        default:
            return state;
    }
}