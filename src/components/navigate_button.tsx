import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as I from '../interfaces';
import {mapStateToPropsAuth as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

//авторизация
function clickLogin(login: string | undefined, password: string | undefined, navigate: Function, doLogin: Function, onLoginFail: Function, doSnackbarPush: Function) {
    let url: string = "https://accidental-utopian-tellurium.glitch.me/users?login="+login+"&password="+password;
    //для теста
    url = "https://accidental-utopian-tellurium.glitch.me/users?login=son&password=123";

    fetch(url, { cache: "no-store" })
    .then(result => result.json())
    .then((result) => {	
        if (result.length>0) {
            if ((typeof result[0].name==="string") &&
            (typeof result[0].token==="string")) {
                navigate('contacts');	
                doSnackbarPush({status:"Здравствуйте, "+result[0].name});
                doLogin({name: result[0].name, token: result[0].token});
            } 
        } else {
            doSnackbarPush({status:"Неудачная попытка авторизации."});
            onLoginFail();
        }       
    })
}



//разлогинивание
function clickLogout(navigate: Function, doLogout: Function, doSnackbarPush: Function) {
	navigate('');	
    doSnackbarPush({status:"До свидания"});
    doLogout();
}
//


type P = I.PropsStateAuth & I.PropsDispaich & {title: string, action: string};
function NavigateButton_i(props:P) {
    const navigate  = useNavigate();    	
    switch (props.action) {
        case "login": {
            return(
                <Button onClick={() => clickLogin(
                    props.login,
                    props.password,
                    navigate,
                    props.doLogin,
                    props.onLoginFail,
                    props.doSnackbarPush
                )}
                variant="contained"
                sx={{ mt: 2, mb: 1 }}>
                    <LoginIcon sx={{paddingRight: 2 }}/>
                    {props.title}
                </Button>
            )
        }
        case "logout": {
            return(
                <Button onClick={() => clickLogout(
                    navigate,
                    props.doLogout,
                    props.doSnackbarPush
                )}
                variant="contained"
                sx={{ mt: 2, mb: 1 }}>                    
                    {props.title}
                    <LogoutIcon sx={{paddingLeft: 2 }}/>
                </Button>
            )
        }
        default: return (<></>)
    }
}

const NavigateButton = connect(mapStateToProps(), mapDispatchToProps)(NavigateButton_i);
export default NavigateButton;