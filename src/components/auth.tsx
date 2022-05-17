import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Container, TextField, Box, Paper, Typography} from '@mui/material';
import * as I from './../interfaces';
import {mapStateToPropsAuth as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import NavigateButton from './navigate_button';

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface StateShowPassword {
	showPassword: boolean;
}

type P = I.PropsStateAuth & I.PropsDispaich;
function Auth_i(props:P) {	
	const navigate  = useNavigate();
	//для "редиректа" с /contacts/ на главную приложения в режиме отладки
	if (window.location.pathname!=='/takeoff/') {
		navigate('/takeoff/');		
		props.doSnackbarPush({status:"В доступе отказано. Необходима авторизация."});		
	}
	//не стал добавлять видимость/маскировку пароля в store, т.к. она гарантированно нигде больше не нужна, кроме одного поля ввода
	const [values, setValues] = React.useState<StateShowPassword>({
		showPassword: false,
	})
	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		})
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
							sx={{ width: '25ch' }}
							value={props.login}
							onChange={(event)=>props.doSetLogin({login:event.target.value})} 
							id="filled-login-input"
							label="Имя пользователя"
							type="text"
							variant="filled"
							margin="normal"
							autoFocus />
        <FormControl
			sx={{ width: '25ch' }}
			variant="filled"
			margin="normal">
        	<InputLabel>
				Пароль
			</InputLabel>
        	<FilledInput
				type={values.showPassword ? 'text' : 'password'}
				value={props.password}
				onChange={(event)=>props.doSetPassword({password:event.target.value})} 
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							edge="end"
						>
						{values.showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
        	/>
        </FormControl>


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