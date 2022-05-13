import * as I from './../interfaces';

const uploadContactApi = async (data:I.StateContacts, id: string): Promise<I.StateContacts|string> => {
	let url = "https://accidental-utopian-tellurium.glitch.me/contacts";
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
	console.log(JSON.stringify(copy));
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