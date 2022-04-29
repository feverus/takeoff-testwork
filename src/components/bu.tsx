import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as I from './../interfaces';
import {mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

function clickEnter(login: string | undefined, password: string | undefined, navigate: Function, enter: Function) {
	navigate('contacts');	
    let url: string = "https://accidental-utopian-tellurium.glitch.me/users?login="+login+"&password="+password;
    //для теста
    //url = "https://accidental-utopian-tellurium.glitch.me/users?login=Mather&password=I-love-c00kie$1";

    fetch(url, { cache: "no-store" })
    .then(result => result.json())
    .then((result) => {	
        if ((typeof result[0].name==="string") &&
           (typeof result[0].token==="string")) {
            enter({name: result[0].name, token: result[0].token});
        }        
    })
}

function Bu_i(props:I.PropsAll) {
    const navigate  = useNavigate();
    return(	
        <button onClick={() => clickEnter(props.login, props.password, navigate, props.enter)}>
        Вход
        </button>
    )
}

const Bu = connect(mapStateToProps("Auth"), mapDispatchToProps)(Bu_i);
export default Bu;