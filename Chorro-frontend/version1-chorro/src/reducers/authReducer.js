import {SWITCH_LOGIN,SWITCH_REGISTER} from '../actions/types'

const INIT_STATE = {
    position_login: true,
    position_register: true,
    position_btn: true}

export default(state = INIT_STATE, action)=> {
    switch(action.type){
        case SWITCH_LOGIN: 
            return{...state, position_login:false, position_register:false,position_btn:false};
        case SWITCH_REGISTER: 
            return{...state, position_login:true, position_register:true,position_btn:true };

        default: return state
    }
}