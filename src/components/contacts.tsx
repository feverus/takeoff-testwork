import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import * as I from '../interfaces';
import {mapStateToPropsContacts as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import NavigateButton from './navigate_button';
import SearchInput from './search_input';
import Contact_List from './contact_list';
import getContactApi from './api/getContactApi';


type P = I.PropsStateContacts & I.PropsDispaich;
class Contacts_i extends React.Component<P> {		
	firstLoad = () => {   
		getContactApi(this.props.token)
		.then(result => {
			if (typeof result!=='string') {                
				this.props.onGetContacts(result);
			} else {
				this.props.onGetContactsFail({status:result});
			}
		}) 
	}  
	componentDidMount() {
		this.firstLoad();	
	}
	render() {
		return (
			<>
				<AppBar position="static">
					<Toolbar
						sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', mt: 1, mb:1 }}>
						<SearchInput />						
						<Typography variant="h6" component="div"
							sx={{flex: '1 1 auto', textAlign: 'right', pr: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
							<AccountBoxIcon />
							{this.props.name}
						</Typography>
						<NavigateButton title="Выход" action="logout" />
					</Toolbar>
				</AppBar>			
				<Contact_List />
			</>
		) 
	}
}


const Contacts = connect(mapStateToProps(), mapDispatchToProps)(Contacts_i);
export default Contacts;