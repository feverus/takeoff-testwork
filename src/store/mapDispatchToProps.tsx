import { bindActionCreators, Dispatch } from 'redux';
import * as I from '../interfaces';
import * as User from './actions/a_user';
import * as Set from './actions/a_set';
import * as Contacts from './actions/a_contacts';

export function mapDispatchToProps() {
	return function (dispatch: Dispatch) {
		return {
			//auth
			doSetLogin: bindActionCreators(User.setLogin, dispatch),
			doSetPassword: bindActionCreators(User.setPassword, dispatch),
			doLogin: bindActionCreators(User.login, dispatch),
			doLogout: bindActionCreators(User.logout, dispatch),
			onLoginFail: bindActionCreators(Set.loginFail, dispatch),
			onGetContactsFail: bindActionCreators(Set.getContactsFail, dispatch),			
			onGetContacts: bindActionCreators(Set.getContacts, dispatch),	
			doDailogDeleteContactOpen: bindActionCreators(Set.dailogDeleteContactOpen, dispatch),	
			doDailogDeleteContactClose: bindActionCreators(Set.dailogDeleteContactClose, dispatch),	
			doStopAskBeforeDelete: bindActionCreators(Set.stopAskBeforeDelete, dispatch),				
			doEditFormOpen: bindActionCreators(Set.editFormOpen, dispatch),	
			doEditFormClose: bindActionCreators(Set.editFormClose, dispatch),	
			doDeleteContacts: bindActionCreators(Contacts.deleteContacts, dispatch),	
			onEditFormEditField: bindActionCreators(Set.editFormEditField, dispatch),

		}
	}
}