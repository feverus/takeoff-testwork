import * as I from '../../interfaces';

export function changePage(value: I.StateSet):I.ActionSet {
	return {
		type: "CHANGE_PAGE",
		payload: value
	};
}