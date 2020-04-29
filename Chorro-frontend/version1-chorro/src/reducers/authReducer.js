import {SHOW_HIDE} from '../actions/types'

const INIT_STATE = {
    icon: "visibility_off"   
}

export default(state = INIT_STATE, action)=> {
    switch(action.type){
        case SHOW_HIDE:
         return {...state, icon: action.payload }
        default: return state
    }
}