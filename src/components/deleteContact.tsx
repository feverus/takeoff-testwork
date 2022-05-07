export default function deleteContact(id:number) {
	fetch('https://accidental-utopian-tellurium.glitch.me/contacts/'+id, {method: 'DELETE'});	
}