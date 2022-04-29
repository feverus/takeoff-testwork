import React from 'react';
import { connect } from 'react-redux';
import * as I from './../interfaces';
import {mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import Auth from './auth';
import Contacts from './contacts';

class Main_i extends React.Component<I.PropsAll> {	
	render() {	
		//console.log(this.props)
		switch (this.props.page) {
			case "loginScreen": {
				return (<Auth />)
			}
			case "contacts": {
				return (<Contacts />)
			}
		}	
	}
}


const Main = connect(mapStateToProps("Main"), mapDispatchToProps)(Main_i);
export default Main;