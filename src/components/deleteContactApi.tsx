const deleteContactApi = async (id:string): Promise<boolean|string> => {
	try {
		const response = await fetch('https://accidental-utopian-tellurium.glitch.me/contacts/'+id, {method: 'DELETE'});
		if (response.status===200) {
			return true;
		} else {
			return String(response.status);
		}
	} catch (error) {
        if (error) {
            return (error as Error).message;
        }
    }
	return true;
}

export default deleteContactApi;