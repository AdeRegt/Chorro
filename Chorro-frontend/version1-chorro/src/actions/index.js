
import dataFile from '../apis/dataFile';
import {
    LOGIN,
    SHOW_HIDE,
} from './types';

export const logIn = formValues => async (dispatch,getState) => {

    const { userId } = getState().auth;
    const response = await dataFile.post('/dataFile', {...formValues,userId});
    console.log(response.data);
    dispatch({type: LOGIN, payload: response.data})
}

export const showHideIcon = (showOrHide) => {
    return {
        type:SHOW_HIDE,
        payload: showOrHide 
    };
}