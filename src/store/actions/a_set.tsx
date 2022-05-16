import * as I from '../../interfaces';

export function loginFail(value: I.StateSet):I.ActionSet {
	return {
		type: "LOGIN_FAILED",
		payload: value
	}
}
export function getContactsFail(value: I.StateSet):I.ActionSet {
	return {
		type: "GET_CONTACTS_FAILED",
		payload: value
	}
}
export function dailogDeleteContactOpen(value: I.StateSet, name:string, id:string):I.ActionSet {
	return {
		type: "DAILOG_DELETE_CONTACT_OPENED",
		payload: value,
		name: name, 
		id: id
	}
}
export function dailogDeleteContactClose(value: I.StateSet):I.ActionSet {
	return {
		type: "DAILOG_DELETE_CONTACT_CLOSED",
		payload: value
	}
}
export function stopAskBeforeDelete(value: I.StateSet):I.ActionSet {
	return {
		type: "STOP_ASK_BEFORE_DELETE",
		payload: value
	}
}
export function editFormOpen(value: I.StateSet):I.ActionSet {
	return {
		type: "EDIT_FORM_OPENED",
		payload: value
	}
}
export function editFormEditField(value: I.StateSet, fieldName: string,	fieldValue: string):I.ActionSet {
	return {
		type: "EDIT_FORM_EDIT_FIELD",
		payload: value,
		fieldName: fieldName,
		fieldValue: fieldValue	
	}
}
export function editFormClose(value: I.StateSet):I.ActionSet {
	return {
		type: "EDIT_FORM_CLOSED",
		payload: value
	}
}
export function snackbarPush(value: I.StateSet):I.ActionSet {
	return {
		type: "SNACKBAR_PUSHED",
		payload: value
	}
}
export function snackbarClose(value: I.StateSet):I.ActionSet {
	return {
		type: "SNACKBAR_CLOSED",
		payload: value
	}
}
export function setSearch(value: I.StateSet):I.ActionSet {
	return {
		type: "SET_SEARCH",
		payload: value
	}
}