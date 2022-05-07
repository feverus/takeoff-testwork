// типы данных для хранилища

export interface StateSet {
    page: string;
	status: string;
	isLoaded: boolean;
	dialogDeleteContactOpened: boolean;
	askBeforeDelete: boolean;
}

export interface StateUser {
    login: string;
    password: string;   
    name: string;
    token: string
}

export interface StateContacts {
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
}

export interface ActionContacts {
	type: string;
	payload: Array<StateContacts>;
}

export type ActionAll = ActionUser | ActionSet | ActionContacts;




//props для map



export interface PropsStateMain {
	page: string;
	name: string;
}
export interface PropsStateAuth {
	login: string;
	password: string;
	status: string;
	token: string;
}
export interface PropsStateContacts {
	status: string;
	token: string;
}
export interface PropsStateContactsList {
	contacts: Array<StateContacts>;
	status: string;
	token: string;
	isLoaded: boolean;
	askBeforeDelete: boolean;
}
export interface PropsStateDDContacts {
	open: boolean;
	askBeforeDelete: boolean;
}

export interface PropsDispaich {
	doSetLogin: Function;
	doSetPassword: Function;
	doLogin: Function;
	doLogout: Function;
	onLoginFail: Function;
	onGetContactsFail: Function; 
	onGetContacts: Function; 
	doDailogDeleteContactOpen: Function; 	
	doDailogDeleteContactClose: Function; 	
	doStopAskBeforeDelete: Function; 	
}
export type PropsAll = PropsStateMain & PropsStateAuth & PropsStateContacts & PropsStateDDContacts &
PropsDispaich;