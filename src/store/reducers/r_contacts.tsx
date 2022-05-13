import initialState from '../initialState';
import * as I from '../../interfaces';

export default function r_contacts(state: Array<I.StateContacts> = initialState.contacts, action: I.ActionContacts): Array<I.StateContacts> {
    switch(action.type) {
        case "LOGIN": {
            return state;        
        }
        case "GET_CONTACTS": {
            return action.payload.concat(state);        
        }          
        case "DELETE_CONTACTS": {
            return state.filter(contact => contact.id!==action.id);        
        }       
        case "EDIT_CONTACTS": {
            let newState = state.filter(contact => contact.id!==action.id);
            return action.payload.concat(newState);        
        }       
        default: return state;
    }
}