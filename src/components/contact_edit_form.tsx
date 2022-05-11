import React from 'react';
import * as I from '../interfaces';
import { connect } from 'react-redux';
import {mapStateToPropsEditFormContacts as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import { Modal, Typography, Box, Card, CardHeader, CardContent, CardActions, IconButton} from '@mui/material';


type P = I.PropsStateEFContacts & I.PropsDispaich & {data:I.StateContacts,id:number};
class Contact_edit_form_i extends React.Component<P> {	
	render() {
		let data = this.props.data;
		return (
            <Modal
                open={this.props.open}
                onClose={()=>this.props.doEditFormClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #0005',
                    boxShadow: 0,
                    p: 4}}>
{data.id+': '+data.name}
{data.fio}
E-mail: {data.email}
Телефон: {data.telephone}


                </Box>


			</Modal>
		)
	}
}

const Contact_edit_form = connect(mapStateToProps(), mapDispatchToProps)(Contact_edit_form_i);
export default Contact_edit_form;