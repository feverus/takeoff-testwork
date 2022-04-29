import { bindActionCreators, Dispatch } from 'redux';
import * as I from '../interfaces';
import * as User from './actions/a_user';
import * as Set from './actions/a_set';
import * as Contacts from './actions/a_contacts';

export function mapDispatchToProps() {
	return function (dispatch: Dispatch) {
		return {
			//main
			doChangePage: bindActionCreators(Set.changePage, dispatch),
			//auth
			doSetLogin: bindActionCreators(User.setLogin, dispatch),
			doSetPassword: bindActionCreators(User.setPassword, dispatch),
			enter: bindActionCreators(User.enter, dispatch)
		}
	}
}