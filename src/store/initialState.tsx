import * as I from '../interfaces';

const initialState: I.StateAll = {
	set: {
		page: "loginScreen",		
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