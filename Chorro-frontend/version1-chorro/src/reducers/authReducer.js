import {SHOW_CHAR,HIDE_CHAR} from '../actions/types'

const INIT_STATE = {
    showHideChar: "password"   
}

export default(state = INIT_STATE, action)=> {
    switch(action.type){
        case SHOW_CHAR:
         return {...state, showHideChar: action.payload };
        case HIDE_CHAR:
         return {...state, showHideChar: action.payload};   
        default: return state
    }
}