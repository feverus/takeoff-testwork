export default function deleteContactApi(id:string) {
	fetch('https://accidental-utopian-tellurium.glitch.me/contacts/'+id, {method: 'DELETE'});
}