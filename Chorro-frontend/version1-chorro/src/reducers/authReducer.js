import {SWITCH_LOGIN,SWITCH_REGISTER} from '../actions/types'

const INIT_STATE = {
    // to make login and register move
    position_login: false,
    position_register: false,
    position_btn: false,
    // skiping tab option button on the input and button that are hidden on the screen
    tabLogInput1: "3",
    tabLogInput2: "4",
    tabLogBtn: "5",
    tabRegInput1: "-1",
    tabRegInput2: "-1",
    tabRegBtn: "-1",

}

export default(state = INIT_STATE, action)=> {
    switch(action.type){
        case SWITCH_LOGIN: 
            return{...state, position_login:false, position_register:false, position_btn:false,
                tabLogInput1: "3",
                tabLogInput2: "4",
                tabLogBtn: "5",
                tabRegInput1: "-1",
                tabRegInput2: "-1",
                tabRegBtn: "-1",
            };
        case SWITCH_REGISTER: 
            return{...state, position_login:true, position_register:true, position_btn:true,
                tabLogInput1: "-1",
                tabLogInput2: "-1",
                tabLogBtn: "-1",
                tabRegInput1: "3",
                tabRegInput2: "4",
                tabRegBtn: "5",
            };

        default: return state
    }
}