export default function deleteContactApi(id:number) {
	fetch('https://accidental-utopian-tellurium.glitch.me/contacts/'+id, {method: 'DELETE'});
}