import history from '../history';
import dataFile from '../apis/dataFile';
import {
    LOGIN,
    SHOW_CHAR,
    HIDE_CHAR,
    ADD_NAME,
    DEL_NAME,
} from './types';

export const logIn = (formValues,registerOrLogin) => async (dispatch,getState) => {

    const { userId } = getState().auth;
    const response = await dataFile.post('/dataFile', {...formValues,userId});
    console.log(response.data);
    dispatch({type: LOGIN, payload: response.data});
 
    // registerOrLogin ? history.push('/addChild') : history.push('/');

    if(registerOrLogin){
        history.push('/addChild')
    } else {
        history.push('/')
    }
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

export const addChildName = (childName, childID) => {
    console.log(childName)
    return {
        type:ADD_NAME,
        payload: childName,
        id: childID,
    }
}

export const deletChildName = ( childID) => {
    return {
        type:DEL_NAME,
        payload: childID,
    }
}


