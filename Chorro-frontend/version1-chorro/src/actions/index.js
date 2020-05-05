
import dataFile from '../apis/dataFile';
import {
    LOGIN,
    SHOW_CHAR,
    HIDE_CHAR,
    ADD_NAME,
    DEL_ACTION,
} from './types';

export const logIn = formValues => async (dispatch,getState) => {

    const { userId } = getState().auth;
    const response = await dataFile.post('/dataFile', {...formValues,userId});
    console.log(response.data);
    dispatch({type: LOGIN, payload: response.data})
}

export const showCharacter = (type) => {
    return {
        type:SHOW_CHAR,
        payload: type,
    };
}

export const hideCharacter = (type) => {
    return {
        type:HIDE_CHAR,
        payload: type,

    };
}

export const addChildName = (childName) => {
    return {
        type:ADD_NAME,
        payload: childName
    }
}

