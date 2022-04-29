import { combineReducers } from 'redux';
import r_set from './r_set';
import r_user from './r_user';
import r_contacts from './r_contacts';

export default combineReducers({
    set: r_set,
    user: r_user,
    contacts: r_contacts
})