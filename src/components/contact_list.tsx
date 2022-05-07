import React from 'react';
import { connect } from 'react-redux';
import * as I from '../interfaces';
import {mapStateToPropsContactsList} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import Contact_card from "./contact_card";

import { Box } from '@mui/material';

type P = I.PropsStateContactsList & I.PropsDispaich;
class Contact_List_i extends React.Component<P> {
	render() {
		let contacts = this.props.contacts.slice();
		if (!this.props.isLoaded) {(<>Загрузка...</>)}
		else {
			return (
				<Box
					sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
				>
					{contacts.map((item,num) => (
							<Contact_card num={num} key={num}/>
					))}
				</Box>             
			)
		}  
	}
}

const Contact_List = connect(mapStateToPropsContactsList(), mapDispatchToProps)(Contact_List_i);
export default Contact_List;
