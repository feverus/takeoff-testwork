export default function uploadContactApi(id:string) {
	fetch('https://accidental-utopian-tellurium.glitch.me/contacts/'+id, {method: 'DELETE'});
}