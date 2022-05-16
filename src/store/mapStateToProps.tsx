import * as I from '../interfaces';

export function mapStateToPropsMain() {
	return function (state: I.StateAll):I.PropsStateMain {
		return {
			page: state.set.page,
		}
	}
}
export function mapStateToPropsAuth() {
	return function (state: I.StateAll):I.PropsStateAuth {
		return {
			login: state.user.login,
			password: state.user.password,
		}
	}
}
export function mapStateToPropsContacts() {
	return function (state: I.StateAll):I.PropsStateContacts {
		return {
			token: state.user.token,
			name: state.user.name,
		}
	}
}
export function mapStateToPropsContactsList() {
	return function (state: I.StateAll):I.PropsStateContactsList {
		return {
			contacts: state.contacts,			
			filter: state.set.filter,
			token: state.user.token,
			isLoaded: state.set.isLoaded,
		}
	}
}
export function mapStateToPropsContactsCard() {
	return function (state: I.StateAll):I.PropsStateContactsCard {
		return {
			contacts: state.contacts,
			askBeforeDelete: state.set.askBeforeDelete,
		}
	}
}
export function mapStateToPropsDialogDeleteContacts() {
	return function (state: I.StateAll):I.PropsStateDDContacts {
		return {
			open: state.set.dialogDeleteContactOpened,
			askBeforeDelete: state.set.askBeforeDelete,
			name: state.set.editFormData.name,
			id: state.set.editFormId,	
		}
	}
}
export function mapStateToPropsSnackbar() {
	return function (state: I.StateAll):I.PropsStateSnackbar {
		return {
			open: state.set.snackbarOpened,
			message: state.set.status,
		}
	}
}
export function mapStateToPropsEditFormContacts() {
	return function (state: I.StateAll):I.PropsStateEFContacts {
		return {
			open: state.set.editFormOpened,
			data: state.set.editFormData,
			id: state.set.editFormId,			
		}
	}
}
export function mapStateToPropsSearch() {
	return function (state: I.StateAll):I.PropsStateSearchInput {
		return {
			filter: state.set.filter,		
		}
	}
}