import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as I from './../interfaces';
import {mapStateToPropsAuth} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import NavigateButton from './navigate_button';

import {Container, TextField, Box, Paper, Grid, Typography} from '@mui/material';

type P = I.PropsStateAuth & I.PropsDispaich;
class Auth_i extends React.Component<P> {			
	render() {
		let status = (this.props.status!=="")? <div>{this.props.status}</div> : "";
		return (
			<Container maxWidth="xs">
				<Box
					sx={{marginTop: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<Typography
						component="h1"
						sx={{marginBottom: '10%'}}>
						Авторизация
					</Typography>
					<Box component="form">
						<Paper
							elevation={4}
							sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',minWidth: '300px'}}>
							<TextField
								value={this.props.login}
								onChange={(event)=>this.props.doSetLogin({login:event.target.value})} 
								id="filled-login-input"
								label="Имя пользователя"
								type="text"
								variant="filled"
								margin="normal"
								autoFocus />
							<TextField
								value={this.props.password}
								onChange={(event)=>this.props.doSetPassword({password:event.target.value})} 
								id="filled-password-input"
								label="Пароль"
								type="password"
								autoComplete="current-password"
								variant="filled"
								margin="normal"/>
							<NavigateButton title="Вход" action="login" />
							<Box
								sx={{margin: '10px'}}>
								{status}
							</Box>
						</Paper>
					</Box>
				</Box>
			</Container>
		)
	}
}


const Auth = connect(mapStateToPropsAuth(), mapDispatchToProps)(Auth_i);
export default Auth;