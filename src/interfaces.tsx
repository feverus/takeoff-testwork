// типы данных для хранилища

export interface StateSet {
    page: string;
}

export interface StateUser {
    login?: string;
    password?: string;   
    name?: string;
    token?: string
}

export interface StateContacts {
    name?: string;
    fio?: string;
    telephone?: string;
    email?: string;
}

export interface StateAll {
    set:StateSet;
    user:StateUser;
    contacts: Array<StateContacts>
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
	payload: StateContacts;
}

export type ActionAll = ActionUser | ActionSet | ActionContacts;




//props для map



export interface PropsState {
	page?: string,
	name?: string
	login?: string,
	password?: string
}
export interface PropsDispaich {
	doChangePage: Function,
	doSetLogin: Function,
	doSetPassword: Function,
	enter: Function
}
export type PropsAll = PropsState & PropsDispaich;