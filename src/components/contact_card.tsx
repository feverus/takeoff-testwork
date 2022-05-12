import React from 'react';
import * as I from '../interfaces';
import { connect } from 'react-redux';
import {mapStateToPropsContactsList as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import Dialog_Delete_Contact from './dialog_delete_contact';
import Contact_edit_form from "./contact_edit_form";
import deleteContactApi from './deleteContactApi';
import { Typography, Card, CardHeader, CardContent, CardActions, IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



type P = I.PropsStateContactsList & I.PropsDispaich & {num:number};
class Contact_card_i extends React.Component<P> {
	handleDelete = (id:string) => {
		deleteContactApi(id);
		this.props.doDeleteContacts({value:[]},id);
	}	
	render() {
		let data = this.props.contacts[this.props.num];
		return (
			<>
			<Card
				elevation={4}
				sx={{ width: '90%', margin: '10px'}}>
				<CardHeader
					sx={{paddingBottom:0}}
					title={data.id+': '+data.name}
					subheader={data.fio}
				/>
				<CardContent
					sx={{paddingBottom:0}}>
				<Typography
					component="div"
					variant="body2"
					color="text.primary"
					>
					E-mail: {data.email}
				</Typography>
				<Typography
					component="div"
					variant="body2"
					color="text.primary">
					Телефон: {data.telephone}
				</Typography>
				</CardContent>
				<CardActions disableSpacing
					sx={{justifyContent: 'flex-end'}}>
					<IconButton aria-label="edit"
						onClick={() => this.props.doEditFormOpen({editFormData:data, editFormId:""})}>
						<ContentCopyIcon
							color="primary"
							/>
					</IconButton>						
					<IconButton aria-label="edit"
						onClick={() => this.props.doEditFormOpen({editFormData:data, editFormId:data.id})}>
						<EditIcon
							color="primary"
							/>
					</IconButton>
					<IconButton aria-label="delete"
						onClick={()=>(this.props.askBeforeDelete?this.props.doDailogDeleteContactOpen():this.handleDelete(data.id))}>
						<DeleteForeverIcon 
							color="warning"
							/>
					</IconButton>
				</CardActions>				
			</Card>

			<Dialog_Delete_Contact name={data.name} id={data.id}/>
			</>
		)
	}
}

const Contact_card = connect(mapStateToProps(), mapDispatchToProps)(Contact_card_i);
export default Contact_card;