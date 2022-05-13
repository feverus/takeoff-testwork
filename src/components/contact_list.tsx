import React from 'react';
import { connect } from 'react-redux';
import * as I from '../interfaces';
import {mapStateToPropsContactsList as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import Dialog_Delete_Contact from './dialog_delete_contact';
import Contact_card from "./contact_card";
import Contact_edit_form from "./contact_edit_form";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type P = I.PropsStateContactsList & I.PropsDispaich;
class Contact_List_i extends React.Component<P> {
	newContact = () => {
		let empty= {
			id:"",
			token: this.props.token,
			name: "",
			fio: "",
			telephone: "",
			email: "",
		};
		return(
		<Button
			onClick={() => this.props.doEditFormOpen({editFormData:empty, editFormId:""})}
			variant="text"
			sx={{ mt: 2, mb: 1 }}>                    
			<AddCircleOutlineIcon/>                  
		</Button>
	)}
	render() {
		let contacts = this.props.contacts.slice();
		var bottomNewContact;
		(contacts.length > 10)?bottomNewContact=this.newContact():bottomNewContact='';
		if (!this.props.isLoaded) {(<>Загрузка...</>)}
		else {
			return (
				<Box
					sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
				><>
					{this.newContact()}

					<Contact_edit_form />
					<Dialog_Delete_Contact />

					{contacts.map((item,num) => (
							<Contact_card num={num} key={num}/>
					))}

					{bottomNewContact}
				</></Box>             
			)
		}  
	}
}

const Contact_List = connect(mapStateToProps(), mapDispatchToProps)(Contact_List_i);
export default Contact_List;
