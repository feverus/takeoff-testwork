import React from 'react';
import { connect } from 'react-redux';
import * as I from '../interfaces';
import {mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

class Auth_i extends React.Component<I.PropsAll> {		
	render() {
		console.log(this.props);
		console.log(this);
		return (
			<>
			контакты
			
			</>
		)
	}
}


const Auth = connect(mapStateToProps("Auth"), mapDispatchToProps)(Auth_i);
export default Auth;