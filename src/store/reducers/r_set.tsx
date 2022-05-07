import initialState from '../initialState';
import * as I from '../../interfaces';

export default function r_set(state: I.StateSet = initialState.set, action: I.ActionSet): I.StateSet {
    switch(action.type) {
        case "LOGIN_FAILED": {
            return {...state, status: "Неудачная попытка авторизации. Проверьте правильность ввода данных."};        
        }
        case "GET_CONTACTS_FAILED": {
            return {...state, status: "Неудачная попытка получения контактов. " + action.payload};        
        }
        case "LOGIN": {
            return {...state, page: "contacts", status: ""}       
        }
        case "LOGOUT": {
            return {...state, page: "loginScreen", status: ""}       
        }
        case "GET_CONTACTS": {
            return {...state, isLoaded: true};        
        } 
        case "DAILOG_DELETE_CONTACT_OPENED": {
            return {...state, dialogDeleteContactOpened: true};        
        } 
        case "DAILOG_DELETE_CONTACT_CLOSED": {
            return {...state, dialogDeleteContactOpened: false};        
        } 
        case "STOP_ASK_BEFORE_DELETE": {            
            return {...state, askBeforeDelete: false};        
        } 

        default: return state;
    }
}