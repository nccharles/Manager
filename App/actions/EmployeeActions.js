import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS

} from './types';
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';  
export const employeeUpdate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value}
    };
};

export const employeeCreate = ({empname, email,phone, shift }) => {
    const { currentUser} = firebase.auth();
    return (dispatch) => {

        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({empname,email, phone, shift })
        .then(()=> {
            dispatch({ type: EMPLOYEE_CREATE});
            Actions.Main({type: 'reset'})
        });
    }

}
export const employeesFetch = () => {
    const { currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value',snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
        });
    };
};
export const employeeSave =({empname,email,phone,shift, uid}) => {
    const { currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({empname, email,phone, shift})
        .then(()=> {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS});
            Actions.Main({type: 'reset'})
        });
        };
    };
export const employeeDelete = ({ uid }) => {
    const { currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=> {
            Actions.Main({type: 'reset'})
        });
        };
}