import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as I from './../interfaces';
import {mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import Bu from './bu';

class Auth_i extends React.Component<I.PropsAll> {			
	render() {
		return (
			<>
			<input type="text" value={this.props.login} onChange={(event)=>this.props.doSetLogin({login:event.target.value})} />

			<input type="text" value={this.props.password} onChange={(event)=>this.props.doSetPassword({password:event.target.value})} />

			<Bu />

			</>
		)
	}
}


const Auth = connect(mapStateToProps("Auth"), mapDispatchToProps)(Auth_i);
export default Auth;