import React from 'react';
import { connect } from 'react-redux';
import { Typography, Card, CardHeader, CardContent, CardActions, IconButton, Tooltip, Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import * as I from '../interfaces';
import {mapStateToPropsContactsCard as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import deleteContactApi from './api/deleteContactApi';



type P = I.PropsStateContactsCard & I.PropsDispaich & {data:I.StateContacts};
class Contact_card_i extends React.Component<P> {
	delete = (id:string) => {
		deleteContactApi(id)
		.then(result => {
			if (result===true) {
				this.props.doSnackbarPush({status:"Контакт удален"});
				this.props.doDeleteContacts({value:[]}, id);
			} else {
				this.props.doSnackbarPush({status:"Ошибка удаления "+result});
			}
		}) 		
	}
	render() {
		let data = this.props.data;
		return (
			<Card
				elevation={4}
				sx={{ width: '90%', margin: '10px', backgroundColor: '#2080d030'}}>
				<CardHeader
					sx={{paddingBottom: 0, backgroundColor: '#2080d030'}}
					title={data.name}
					subheader={(data.fio==="")?"Не указано":data.fio}
				/>
				<CardContent
					sx={{paddingBottom:0}}>
					<Typography
						component="div"
						variant="body2"
						color="text.primary"
						sx={{display: (data.email==="")?'none':'block'}}
						>
						E-mail: {data.email}
					</Typography>
					<Typography
						component="div"
						variant="body2"
						sx={{display: (data.telephone==="")?'none':'block'}}
						>					
						Телефон: {data.telephone}
					</Typography>
				</CardContent>
				<CardActions disableSpacing
					sx={{justifyContent: 'space-between'}}>
					<Box
						sx={{justifyContent: 'flex-start', opacity: '0.3', ml: 1}}>
						{"id: " + data.id}
					</Box>
					<Box
						sx={{justifyContent: 'flex-end'}}>
						<Tooltip title="Копировать контакт" arrow>
							<IconButton aria-label="edit"
								onClick={() => this.props.doEditFormOpen({editFormData:data, editFormId:""})}>
								<ContentCopyIcon
									color="primary"
									/>
							</IconButton>	
						</Tooltip>
						<Tooltip title="Редактировать контакт" arrow>
							<IconButton aria-label="edit"
								onClick={() => this.props.doEditFormOpen({editFormData:data, editFormId:data.id})}>
								<EditIcon
									color="primary"
									/>
							</IconButton>
						</Tooltip>
						<Tooltip title="Удалить контакт" arrow>
							<IconButton aria-label="delete"
								onClick={()=>(this.props.askBeforeDelete?this.props.doDailogDeleteContactOpen({},data.name, data.id):this.delete(data.id))}>
								<DeleteForeverIcon 
									color="warning"
									/>
							</IconButton>
						</Tooltip>
					</Box>
				</CardActions>				
			</Card>
		)
	}
}

const Contact_card = connect(mapStateToProps(), mapDispatchToProps)(Contact_card_i);
export default Contact_card;