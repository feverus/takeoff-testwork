// типы данных для хранилища

export interface StateSet {
    page: string;
	status: string;
	filter: string;
	snackbarOpened: boolean;
	isLoaded: boolean;
	dialogDeleteContactOpened: boolean;
	editFormOpened: boolean;
	editFormData: StateContacts;
	editFormId: string;
	askBeforeDelete: boolean;
}
export interface StateUser {
    login: string;
    password: string;   
    name: string;
    token: string
}
export interface StateContacts {
	id:string;
	token: string;
    name: string;
    fio: string;
    telephone: string;
    email: string;
}
export interface StateAll {
    set:StateSet;
    user:StateUser;
    contacts: Array<StateContacts>;
}










// экшены

export interface ActionUser {
	type: string;
	payload: StateUser;
}
export interface ActionSet {
	type: string;
	payload: StateSet;
	fieldName?: string;
	fieldValue?: string;
	name?: string;
	id?: string;
}
export interface ActionContacts {
	type: string;
	payload: Array<StateContacts>;
	id?: string;
}











//props для mapStateToProps

export interface PropsStateMain {
	page: string;
}
export interface PropsStateAuth {
	login: string;
	password: string;
}
export interface PropsStateContacts {
	token: string;
	name: string;
}
export interface PropsStateContactsList {
	contacts: Array<StateContacts>;
	filter: string;
	token: string;
	isLoaded: boolean;
}
export interface PropsStateContactsCard {
	contacts: Array<StateContacts>;
	askBeforeDelete: boolean;
}
export interface PropsStateDDContacts {
	open: boolean;
	askBeforeDelete: boolean;
	name: string;
	id: string;
}
export interface PropsStateSnackbar {
	open: boolean;
	message: string;
}
export interface PropsStateEFContacts {
	open: boolean;
	data: StateContacts;
	id: string;
}
export interface PropsStateSearchInput {
	filter: string;
}









//функции для mapDispatchToProps

export interface PropsDispaich {
	doSetLogin: Function;
	doSetPassword: Function;
	doLogin: Function;
	doLogout: Function;
	onLoginFail: Function;
	onGetContactsFail: Function; 
	onGetContacts: Function; 
	doEditContacts: Function; 
	doDailogDeleteContactOpen: Function; 	
	doDailogDeleteContactClose: Function; 	
	doStopAskBeforeDelete: Function; 	
	doDeleteContacts: Function; 	
	doEditFormOpen: Function; 	
	doEditFormClose: Function; 	
	onSnackbarClose: Function; 	
	doSnackbarPush: Function; 	
	onEditFormEditField: Function; 	
	doSetSearch: Function; 	
}