import * as I from '../interfaces';

const initialState: I.StateAll = {
	set: {
		page: "loginScreen",
		status: "",
		isLoaded: false,	
		dialogDeleteContactOpened: false,	
		editFormOpened: false,	
		editFormData: {
			id:"",
			token: "",
			name: "",
			fio: "",
			telephone: "",
			email: "",
		},
		editFormId: "",	
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