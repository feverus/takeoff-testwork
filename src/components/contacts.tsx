import React from 'react';
import { connect } from 'react-redux';
import * as I from '../interfaces';
import {mapStateToPropsContacts as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';
import NavigateButton from './navigate_button';
import Contact_List from './contact_list';




type P = I.PropsStateContacts & I.PropsDispaich;
class Contacts_i extends React.Component<P> {		
 
	firstLoad = () => {     
		fetch('https://accidental-utopian-tellurium.glitch.me/contacts?token='+this.props.token)
			.then(res => res.json())
			.then((result) => {
                this.props.onGetContacts(result);
            })
            .catch(error => this.props.onGetContactsFail({status:String(error)}))
	}  

	componentDidMount() {
		this.firstLoad();	
	}

	render() {
		console.log(this.props);
        let status = (this.props.status!=="")? <div>{this.props.status}</div> : "";
		return (
			<>
			
			<NavigateButton title="Выход" action="logout" />

			<Contact_List />

            {status}
			</>
		) 
		
	}
}


const Contacts = connect(mapStateToProps(), mapDispatchToProps)(Contacts_i);
export default Contacts;