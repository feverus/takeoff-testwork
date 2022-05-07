import * as I from '../../interfaces';

export function setLogin(value: I.StateUser):I.ActionUser {
	return {
		type: "SET_LOGIN",
		payload: value
	}
}
export function setPassword(value: I.StateUser):I.ActionUser {
	return {
		type: "SET_PASSWORD",
		payload: value
	}
}
export function login(value: I.StateUser):I.ActionUser {
	return {
		type: "LOGIN",
		payload: value
	}
}
export function logout(value: I.StateUser):I.ActionUser {
	return {
		type: "LOGOUT",
		payload: value
	}
}