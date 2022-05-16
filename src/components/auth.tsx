import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Container, TextField, Box, Paper, Typography} from '@mui/material';
import * as I from './../interfaces';
import {mapStateToPropsAuth as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import NavigateButton from './navigate_button';
import { useEffect } from 'react';

type P = I.PropsStateAuth & I.PropsDispaich;
function Auth_i(props:P) {	
	const navigate  = useNavigate();
	if (window.location.pathname!=='/takeoff/') {
		navigate('/takeoff/');		
		props.doSnackbarPush({status:"В доступе отказано. Необходима авторизация."});		
	}
	return (
		<Container maxWidth="xs">
			<Box
				sx={{marginTop: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<Typography
					component="h1"
					sx={{marginBottom: '5%',
					fontSize: 40,
					color: '#2080d0',
					textShadow: '2px 2px 3px #2080d073'}}>
					Авторизация
				</Typography>
				<Box component="form">
					<Paper
						elevation={4}
						sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',minWidth: '300px', bgcolor: '#2080d010'}}>
						<TextField
							value={props.login}
							onChange={(event)=>props.doSetLogin({login:event.target.value})} 
							id="filled-login-input"
							label="Имя пользователя"
							type="text"
							variant="filled"
							margin="normal"
							autoFocus />
						<TextField
							value={props.password}
							onChange={(event)=>props.doSetPassword({password:event.target.value})} 
							id="filled-password-input"
							label="Пароль"
							type="password"
							autoComplete="current-password"
							variant="filled"
							margin="normal"/>
						<NavigateButton title="Вход" action="login" />
						<Box
							sx={{margin: '10px'}}>
						</Box>
					</Paper>
				</Box>
			</Box>
		</Container>
	)
}


const Auth = connect(mapStateToProps(), mapDispatchToProps)(Auth_i);
export default Auth;