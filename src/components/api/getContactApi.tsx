import * as I from '../../interfaces';
import urlApi  from './urlApi';

const getContactApi = async (token:string): Promise<Array<I.StateContacts>|string> => {
	try {
		const response = await fetch(urlApi+"/contacts/?token="+token, {method: 'GET'});
		if (response.status===200) {
			const data = await response.json();
			return data;
		} else {
			return String(response.status);
		}
	} catch (error) {
        if (error) {
            return (error as Error).message;
        }
    }
	return "";
}

export default getContactApi;