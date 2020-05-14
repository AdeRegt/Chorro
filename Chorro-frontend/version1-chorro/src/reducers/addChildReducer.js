import _ from 'lodash';
import {ADD_NAME,DEL_NAME,DEL_ALL,SEND_CHILD_INFO} from '../actions/types';

export default (state = {},action) => {

    switch(action.type){
        case ADD_NAME: 
        return {...state, [action.id]:action.payload};

        case DEL_NAME:
        return _.omit(state, action.payload);

        case DEL_ALL:
        return _.omit(state, action.payload );
        
        case SEND_CHILD_INFO:
        return {...state, [action.id]:action.payload};


        default: return state

    }
}