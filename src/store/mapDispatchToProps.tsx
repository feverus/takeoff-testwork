import { bindActionCreators, Dispatch } from 'redux';
import * as User from './actions/a_user';
import * as Set from './actions/a_set';
import * as Contacts from './actions/a_contacts';

export function mapDispatchToProps() {
	return function (dispatch: Dispatch) {
		return {
			doSetLogin: bindActionCreators(User.setLogin, dispatch),
			doSetPassword: bindActionCreators(User.setPassword, dispatch),
			doLogin: bindActionCreators(User.login, dispatch),
			doLogout: bindActionCreators(User.logout, dispatch),

			onLoginFail: bindActionCreators(Set.loginFail, dispatch),
			onGetContactsFail: bindActionCreators(Set.getContactsFail, dispatch),
			onSnackbarClose: bindActionCreators(Set.snackbarClose, dispatch),
			onEditFormEditField: bindActionCreators(Set.editFormEditField, dispatch),
			doDailogDeleteContactOpen: bindActionCreators(Set.dailogDeleteContactOpen, dispatch),
			doDailogDeleteContactClose: bindActionCreators(Set.dailogDeleteContactClose, dispatch),
			doStopAskBeforeDelete: bindActionCreators(Set.stopAskBeforeDelete, dispatch),
			doEditFormOpen: bindActionCreators(Set.editFormOpen, dispatch),
			doEditFormClose: bindActionCreators(Set.editFormClose, dispatch),
			doSnackbarPush: bindActionCreators(Set.snackbarPush, dispatch),
			doSetSearch: bindActionCreators(Set.setSearch, dispatch),

			onGetContacts: bindActionCreators(Contacts.getContacts, dispatch),
			doEditContacts: bindActionCreators(Contacts.editContacts, dispatch),
			doDeleteContacts: bindActionCreators(Contacts.deleteContacts, dispatch),
		}
	}
}