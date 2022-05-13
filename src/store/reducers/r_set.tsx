import initialState from '../initialState';
import * as I from '../../interfaces';
import { idText } from 'typescript';

export default function r_set(state: I.StateSet = initialState.set, action: I.ActionSet): I.StateSet {
    console.log(action)
    switch(action.type) {
        case "LOGIN_FAILED": {
            return {...state, status: "Неудачная попытка авторизации. Проверьте правильность ввода данных."};        
        }
        case "GET_CONTACTS_FAILED": {
            return {...state, status: "Неудачная попытка получения контактов. " + action.payload.status};        
        }
        case "LOGIN": {
            return {...state, page: "contacts"}       
        }
        case "LOGOUT": {
            return {...state, page: "loginScreen"}       
        }
        case "GET_CONTACTS": {
            return {...state, isLoaded: true};        
        } 
        case "DAILOG_DELETE_CONTACT_OPENED": {
            return {...state,
                dialogDeleteContactOpened: true,
                editFormId: String(action.id),
                editFormData: {...state.editFormData, name: String(action.name)}
            };       
        } 
        case "DAILOG_DELETE_CONTACT_CLOSED":
        case "DELETE_CONTACTS": {
            return {...state, dialogDeleteContactOpened: false};        
        } 
        case "EDIT_FORM_OPENED": {
            return {...state, editFormOpened: true,
                editFormData: action.payload.editFormData,
                editFormId: action.payload.editFormId
            };        
        } 
        case "EDIT_FORM_EDIT_FIELD": {
            let copy = JSON.parse(JSON.stringify(state));
            let fieldValue=String(action.fieldValue);
            switch(action.fieldName) {
                case "name": {copy.editFormData["name"] = fieldValue} break;
                case "fio": {copy.editFormData["fio"] = fieldValue} break;
                case "email": {copy.editFormData["email"] = fieldValue} break;
                case "telephone": {copy.editFormData["telephone"] = fieldValue} break;
            }
            return copy;        
        } 
        case "EDIT_FORM_CLOSED": {
            return {...state, editFormOpened: false};        
        } 
        case "SNACKBAR_CLOSED": {
            return {...state, snackbarOpened: false};        
        } 
        case "SNACKBAR_PUSHED": {
            return {...state, snackbarOpened: true,
                status:action.payload.status};        
        } 
        case "STOP_ASK_BEFORE_DELETE": {            
            return {...state, askBeforeDelete: false};        
        } 

        default: return state;
    }
}