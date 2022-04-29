import * as I from '../../interfaces';

export function setLogin(value: I.StateUser):I.ActionUser {
	return {
		type: "LOGIN",
		payload: value
	}
}
export function setPassword(value: I.StateUser):I.ActionUser {
	return {
		type: "PASSWORD",
		payload: value
	}
}
export function enter(value: I.StateUser):I.ActionUser {
	return {
		type: "ENTER",
		payload: value
	}
}