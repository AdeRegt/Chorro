import {LOGIN} from '../actions/types';


export default (state = {}, action) => {

    switch(action.type){
        case LOGIN:
            return {...state, [action.payload.id]:action.payload};
        default:
            return state;
    }
}