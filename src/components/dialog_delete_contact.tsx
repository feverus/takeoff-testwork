import * as React from 'react';
import { connect } from 'react-redux';
import * as I from '../interfaces';
import {mapStateToPropsDialogDeleteContacts as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import deleteContactApi from './deleteContactApi';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

type P = I.PropsStateDDContacts & I.PropsDispaich & {name:string, id:number};
class Dialog_Delete_Contact_i extends React.Component<P> {	
	handleDelete = (id:number) => {
		deleteContactApi(id);
		this.props.doDeleteContacts({value:[]},id);
	}

	render() {		
		let stAsk = this.props.askBeforeDelete? "flex" : "none";
		return (
			<div>
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
						sx={{display:stAsk, lineHeight:'1em', flex:'1'}}
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
					onClick={()=>this.handleDelete(this.props.id)} autoFocus>
					Удалить
				</Button>
				</DialogActions>
			</Dialog>
			</div>
		)
	}
}


const Dialog_Delete_Contact = connect(mapStateToProps(), mapDispatchToProps)(Dialog_Delete_Contact_i);
export default Dialog_Delete_Contact;