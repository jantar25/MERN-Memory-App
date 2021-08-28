import { AUTH } from '../Constants/actionTypes';
import * as api from "../api";

export const signin= (formData,history) => async(dispatch)=>{
try {
   //SIGNIN THE USER
   history.push('/');
} catch (error) {console.log(error)}
}

export const signup= (formData,history) => async(dispatch)=>{
    try {
       //SIGNUP THE USER
       history.push('/');
    } catch (error) {console.log(error)}
    }