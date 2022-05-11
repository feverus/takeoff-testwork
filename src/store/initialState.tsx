import * as I from '../interfaces';

const initialState: I.StateAll = {
	set: {
		page: "loginScreen",
		status: "",
		isLoaded: false,	
		dialogDeleteContactOpened: false,	
		editFormOpened: false,	
		askBeforeDelete: true,	
	},
	user: {
		login: "",
		password: "",
		name: "",
		token: ""
	},
	contacts: []
};

export default initialState;