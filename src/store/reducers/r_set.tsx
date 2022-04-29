import initialState from '../initialState';
import * as I from '../../interfaces';

export default function r_set(state: I.StateSet = initialState.set, action: I.ActionSet): I.StateSet {
    switch(action.type) {
        case "CHANGE_PAGE": {
            return {...state, page: action.payload.page};        
        }
        case "ENTER": {
            return {...state, page: "contacts"}       
        }

        default: return state;
    }
}