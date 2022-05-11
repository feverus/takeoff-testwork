import * as I from '../../interfaces';

export function login(value: I.StateContacts[]):I.ActionContacts {
	return {
		type: "LOGIN",
		payload: value
	}
}
export function getContacts(value: I.StateContacts[]):I.ActionContacts {
	return {
		type: "GET_CONTACTS",
		payload: value
	}
}
export function deleteContacts(value: I.StateContacts[], id:number):I.ActionContacts {
	return {
		type: "DELETE_CONTACTS",
		payload: value,
		id: id
	}
}