import React from 'react';
import { connect } from 'react-redux';
import { Modal, TextField, Box, Button} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import NumberFormat from 'react-number-format';
import * as I from '../interfaces';
import {mapStateToPropsEditFormContacts as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import uploadContactApi from './api/uploadContactApi';

type P = I.PropsStateEFContacts & I.PropsDispaich;
class Contact_edit_form_i extends React.Component<P> {	
	close = () => {
		this.props.doEditFormClose();
	}         
    approve = () => {
        let status = (this.props.id==="")?"Контакт создан":"Контакт изменен";
        uploadContactApi(this.props.data, this.props.id)
        .then(result => {
            if (typeof result!=='string') {                
                this.props.doEditContacts(result, this.props.id);                
                this.props.doEditFormClose();
                this.props.doSnackbarPush({status:status});
            } else {
                this.props.doSnackbarPush({status:"Ошибка создания контакта:  "+result});
            }
        }) 		
    }         
    change = (fieldName: string, fieldValue: string) => {
        this.props.onEditFormEditField({}, fieldName, fieldValue);
    }
	render() {
		let data = this.props.data;
		return (
            <Modal 
                open={this.props.open}
                onClose={()=>this.close()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{  
                    margin: '10% auto', 
                    width: '70%',              
                    border: '2px solid #0005',
                    boxShadow: '0 0 100px rgba(0,0,0);',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#eeeeee',
                    p: 4}}>
                    <TextField
                        required
                        label="Псевдоним"
                        value={data.name}
                        margin="normal"
                        onChange={(event)=>this.change("name",event.target.value)}
                        autoFocus
                    />
                    <TextField
                        label="ФИО"
                        value={data.fio}
                        margin="normal"
                        onChange={(event)=>this.change("fio",event.target.value)}
                    />
                    <TextField
                        label="E-mail"
                        value={data.email}
                        margin="normal"
                        onChange={(event)=>this.change("email",event.target.value)}
                        type="email"
                    />
                    <NumberFormat
                        customInput={TextField} 
                        label="Телефон"
                        value={data.telephone}
                        onChange={(event: { target: { value: string } }) => this.change("telephone", event.target.value)}
                        margin="normal"
                        autoComplete="off"
                        thousandSeparator="-"
                        allowNegative={false}
                        format="+# (###) ###-####"
                        mask="_"
                    />
                    <Box
                        sx={{  
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap'}}>
                            <Button
                                onClick={() => this.close()}
                                variant="contained"
                                color="error"
                                sx={{ mt: 2, mb: 1 }}>
                                <CancelIcon sx={{ pr: 2 }}/>
                                Отмена
                            </Button>
                            <Button
                                onClick={() => this.approve()}
                                variant="contained"
                                sx={{ mt: 2, mb: 1 }}>
                                <DoneIcon sx={{ pr: 2 }}/>
                                Сохранить контакт
                            </Button>
                    </Box>
                </Box>
			</Modal>
		)
	}
}

const Contact_edit_form = connect(mapStateToProps(), mapDispatchToProps)(Contact_edit_form_i);
export default Contact_edit_form;