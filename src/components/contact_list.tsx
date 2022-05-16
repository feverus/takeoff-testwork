import React from 'react';
import { connect } from 'react-redux';
import { Box, Tooltip, Button, CircularProgress } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as I from '../interfaces';
import {mapStateToPropsContactsList as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import Dialog_Delete_Contact from './dialog_delete_contact';
import Contact_card from "./contact_card";
import Contact_edit_form from "./contact_edit_form";

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
			<Tooltip title="Новый контакт" arrow>
				<Button
					onClick={() => this.props.doEditFormOpen({editFormData:empty, editFormId:""})}
					variant="text"
					sx={{ mt: 2, mb: 1 }}>                    
					<AddCircleOutlineIcon/>                  
				</Button>
			</Tooltip>
		)
	}
	render() {
		let contacts = this.props.contacts.slice();
		if (this.props.filter!=="") {
			let finded = false;
			contacts = contacts.filter(
				(item)=> {
					let values = Object.values(item);
					//удаляем id и token, т.к. в них искать не нужно
					values.shift(); values.shift();
					finded = false;
					for (const value of values) {
						if (!finded) {
							finded = value.toUpperCase().includes(this.props.filter.toUpperCase());
							if ( finded ) {
								return item;
							}
						}
					}	
				}
			)				
		}
		var bottomNewContact;
		(contacts.length > 10)? bottomNewContact = this.newContact() : bottomNewContact='';
		if (!this.props.isLoaded) {
			return (
				<Box
					sx={{ width: '100%', height: 'calc(80vh - 80px)', bgcolor: '#2080d030', display: 'flex', flexDirection: 'column', alignItems: 'center',
					textAlign: 'center', pt: '20vh', fontSize: 'larger'}}
				>
					<CircularProgress color="info" /><br/>
					Загрузка...<br/><br/>
					Первое обращение к api glitch.com может занять пару минут.<br/><br/>
					Пожалуйста, подождите.
				</Box>
			)
		}
		else {
			return (
				<Box
					sx={{ width: '100%', minHeight: 'calc(100vh - 80px)', bgcolor: '#2080d030', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
				>
					{this.newContact()}
					<Contact_edit_form />
					<Dialog_Delete_Contact />
					{contacts.map(
						(item) => (
							<Contact_card data={item} key={item.id}/>
						))
					}
					{bottomNewContact}
				</Box>             
			)
		}  
	}
}

const Contact_List = connect(mapStateToProps(), mapDispatchToProps)(Contact_List_i);
export default Contact_List;
