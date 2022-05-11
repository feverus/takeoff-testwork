import React from 'react';
import { connect } from 'react-redux';
import * as I from './../interfaces';
import {mapStateToPropsMain as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import Auth from './auth';
import Contacts from './contacts';

type P = I.PropsStateMain & I.PropsDispaich;
class Main_i extends React.Component<P> {	
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


const Main = connect(mapStateToProps(), mapDispatchToProps)(Main_i);
export default Main;