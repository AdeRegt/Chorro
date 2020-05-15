import history from '../history';
import dataFile from '../apis/dataFile';
import {
    LOGIN_REGISTER,
    SHOW_CHAR,
    HIDE_CHAR,
    ADD_NAME,
    DEL_NAME,
    DEL_ALL,
    SEND_CHILD_INFO,
    NEW_ROW,
    UPDATE_ROW,
    DEL_ROW,
} from './types';

export const loginRegister = (formValues,registerOrLogin) => async (dispatch,getState) => {
    history.push('/spinner')
    let endpoint = '/login';
    let route = '/';

    if(registerOrLogin){
        endpoint = '/register'
        route = '/addChild'   
    }
        const response = await dataFile.post(endpoint, {...formValues});
        dispatch({type: LOGIN_REGISTER, payload: response.data});
     
        if(endpoint === '/register' ){
            endpoint = '/login'
            const response = await dataFile.post(endpoint,{...formValues});
            dispatch({type: LOGIN_REGISTER, payload: response.data});
        }
        history.push(route)

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

export const deleteAll = (keyValues) => {
    history.push('/')
    return{
        type: DEL_ALL,
        payload: keyValues
    }
}

export const sendChildInfo = (childInfo) => async(dispatch) => {

    history.push('/spinner')
    const response = await dataFile.post('/childInfo', {...childInfo});
    dispatch({type:SEND_CHILD_INFO, payload: response.data})
    history.push('/parentTable');
}


export const addNewRow = (newData) =>{
    return{
        type: NEW_ROW,
        payload: newData,
    }
}

export const updateRow = (newData) =>{
    return{
        type: UPDATE_ROW,
        payload: newData,
    }
}

export const deleteRow = (rowForDelete) => {
    return {
        type: DEL_ROW,
        payload:rowForDelete,         
    }
}
