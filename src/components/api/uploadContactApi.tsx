import * as I from '../../interfaces';
import urlApi  from './urlApi';

const uploadContactApi = async (data:I.StateContacts, id: string): Promise<I.StateContacts|string> => {
	let url = urlApi+"/contacts";
	let method = "POST";
	let goodStatus = 201;
	let copy = JSON.parse(JSON.stringify(data));
	//не передаем id в json, он назначается автоматически 
	copy.id = "";
	// при редактировании нужно передать id контакта в api другим способом
	if (id!=="") {
		url = url + "/" +id;
		method = "PATCH";
		goodStatus = 200;
	}
	if (copy.name==="") {
		return "Безымянный контакт";
	}
	if ((copy.fio==="") && (copy.email==="") && (copy.telephone==="")) {
		return "Контакт без данных";
	}	
	try {
		const response = await fetch(
			url,
			{method: method, 
			headers: {'Content-Type': 'application/json;charset=utf-8'},
			body: JSON.stringify(copy)});
		if (response.status===goodStatus) {
			const data = await response.json();
			if (typeof data.id === 'string') {
				return data;
			} else {
				return "от api получены данные в неверном формате";
			}
			
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

export default uploadContactApi;