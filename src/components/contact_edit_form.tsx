import React from 'react';
import * as I from '../interfaces';
import { connect } from 'react-redux';
import {mapStateToPropsEditFormContacts as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import uploadContactApi from './uploadContactApi';

import { Modal, TextField, Box} from '@mui/material';
import NumberFormat from 'react-number-format';

type P = I.PropsStateEFContacts & I.PropsDispaich;
class Contact_edit_form_i extends React.Component<P> {	
	handleClose = () => {
		uploadContactApi("");
		this.props.doEditFormClose();
	} 
    handleChange = (fieldName: string,	fieldValue: string) => {
        
        this.props.onEditFormEditField({}, fieldName,	fieldValue);
    }
	render() {
		let data = this.props.data;
		return (
            <Modal
                open={this.props.open}
                onClose={()=>this.handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{  
                    margin: '10% auto', 
                    width: '70%',                
                    bgcolor: 'background.paper',
                    border: '2px solid #0005',
                    boxShadow: '0 0 100px rgba(0,0,0);',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4}}>
        <TextField
            required
            label="Имя"
            value={data.name}
            margin="normal"
            onChange={(event)=>this.handleChange("name",event.target.value)}
        />
        <TextField
            required
            label="ФИО"
            value={data.fio}
            margin="normal"
            onChange={(event)=>this.handleChange("fio",event.target.value)}
        />
        <TextField
            required
            label="E-mail"
            value={data.email}
            margin="normal"
            onChange={(event)=>this.handleChange("email",event.target.value)}
            type="email"
        />

        <NumberFormat customInput={TextField} 
            required           
            label="Телефон"
            value={data.telephone}
            onChange={(event: { target: { value: string; }; })=>this.handleChange("telephone",event.target.value)}
            autoComplete="off"
            thousandSeparator="-"
            allowNegative={false}
            format="+# (###) ###-####"
            mask="_"
            />


                </Box>


			</Modal>
		)
	}
}

const Contact_edit_form = connect(mapStateToProps(), mapDispatchToProps)(Contact_edit_form_i);
export default Contact_edit_form;