import {
    SWITCH_LOGIN,
    SWITCH_REGISTER,
} from './types';

export const switchLogin = () => {
    return {
        type: SWITCH_LOGIN
    };
};

export const switchRegister = () => {
    return{
        type: SWITCH_REGISTER
    }
}