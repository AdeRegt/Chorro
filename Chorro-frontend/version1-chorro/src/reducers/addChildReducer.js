import _ from 'lodash';
import {ADD_NAME,DEL_NAME} from '../actions/types';

export default (state = {},action) => {

    switch(action.type){
        case ADD_NAME: 
        return {...state, [action.id]:action.payload};

        case DEL_NAME:
        return _.omit(state, action.payload);

        default: return state

    }
}