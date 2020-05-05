import _ from 'lodash';

import {ADD_NAME} from '../actions/types';

export default (state = {},action) => {
    switch(action.type){
        case ADD_NAME: 
        return {...state, childName: action.payload};

        default: return state

    }
}