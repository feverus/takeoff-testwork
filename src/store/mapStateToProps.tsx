import * as I from '../interfaces';

export function mapStateToPropsMain() {
	return function (state: I.StateAll):I.PropsStateMain {
		return {
			page: state.set.page,
			name: state.user.name
		}
	}
}
export function mapStateToPropsAuth() {
	return function (state: I.StateAll):I.PropsStateAuth {
		return {
			login: state.user.login,
			password: state.user.password, 
			status: state.set.status,
			token: state.user.token,
		}
	}
}
export function mapStateToPropsContacts() {
	return function (state: I.StateAll):I.PropsStateContacts {
		return {
			status: state.set.status,
			token: state.user.token,
		}
	}
}
export function mapStateToPropsContactsList() {
	return function (state: I.StateAll):I.PropsStateContactsList {
		return {
			contacts: state.contacts,
			status: state.set.status,
			token: state.user.token,
			isLoaded: state.set.isLoaded,
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