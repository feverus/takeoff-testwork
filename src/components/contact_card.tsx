import React from 'react';
import * as I from '../interfaces';
import { connect } from 'react-redux';
import {mapStateToPropsContactsList} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import Dialog_Delete_Contact from './dialog_delete_contact';
import deleteContact from './deleteContact';
import { Typography, Card, CardHeader, CardContent, CardActions, IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



type P = I.PropsStateContactsList & I.PropsDispaich & {num:number};
class Contact_card_i extends React.Component<P> {
	render() {
		let data = this.props.contacts[this.props.num];
		return (
			<>
			<Card
				elevation={4}
				sx={{ width: '90%', margin: '10px'}}>
				<CardHeader
					title={data.name}
					subheader={data.fio}
				/>
				<CardContent>
				<Typography
					component="div"
					variant="body2"
					color="text.primary"
					>
					{data.email}
				</Typography>
				<Typography
					component="div"
					variant="body2"
					color="text.primary">
					{data.telephone}
				</Typography>
				</CardContent>
				<CardActions disableSpacing
					sx={{justifyContent: 'flex-end'}}>
					<IconButton aria-label="edit">
						<EditIcon
							color="primary"
							/>
					</IconButton>
					<IconButton aria-label="delete"
						onClick={()=>(this.props.askBeforeDelete?this.props.doDailogDeleteContactOpen():deleteContact(this.props.num))}>
						<DeleteForeverIcon 
							color="warning"
							/>
					</IconButton>
				</CardActions>				
			</Card>

			<Dialog_Delete_Contact name={data.name} />
			</>
		)
	}
}

const Contact_card = connect(mapStateToPropsContactsList(), mapDispatchToProps)(Contact_card_i);
export default Contact_card;