import initialState from '../initialState';
import * as I from '../../interfaces';

export default function r_user(state: I.StateUser = initialState.user, action: I.ActionUser): I.StateUser {
    switch(action.type) {
        case "SET_LOGIN": {
            return {...state, login: action.payload.login}   
        }
        case "SET_PASSWORD": {
            return {...state, password: action.payload.password}       
        }
        case "LOGIN": {
            return {...state, name: action.payload.name, token: action.payload.token}       
        }
                 
        default: return state;
    }
}