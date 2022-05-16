import * as React from 'react';
import { connect } from 'react-redux';
import deleteContactApi from './api/deleteContactApi';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import * as I from '../interfaces';
import {mapStateToPropsDialogDeleteContacts as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

type P = I.PropsStateDDContacts & I.PropsDispaich;
class Dialog_Delete_Contact_i extends React.Component<P> {	
	delete = (id:string) => {
		deleteContactApi(id)
		.then(result => {
			if (result===true) {
				this.props.doSnackbarPush({status:"Контакт удален"});
				this.props.doDeleteContacts({value:[]}, id);
			} else {
				this.props.doSnackbarPush({status:"Ошибка удаления: "+result});
			}
		}) 		
	}
	render() {		
		let showAsk = this.props.askBeforeDelete? "flex" : "none";
		return (
			<Dialog
				open={this.props.open}
				onClose={()=>this.props.doDailogDeleteContactClose()}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					Удалить контакт {this.props.name}?
				</DialogTitle>
				<DialogActions>
				<Button
					sx={{display:showAsk, lineHeight:'1em', flex:'1'}}
					onClick={()=>this.props.doStopAskBeforeDelete()}>
					<DoDisturbIcon
						color="info"
						sx={{pr:'10px'}}
						/>
					Больше не спрашивать
				</Button>
				<Button
					onClick={()=>this.props.doDailogDeleteContactClose()}>
					Отмена
				</Button>
				<Button
					onClick={()=>this.delete(this.props.id)} autoFocus>
					Удалить
				</Button>
				</DialogActions>
			</Dialog>
		)
	}
}


const Dialog_Delete_Contact = connect(mapStateToProps(), mapDispatchToProps)(Dialog_Delete_Contact_i);
export default Dialog_Delete_Contact;