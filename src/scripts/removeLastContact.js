import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";



export const removeLastContact = async () => {
	try{
		const contacts = await readContacts();
		if (contacts.length <= 0){
			return('contacts not found')
		}
		const deletedContact = contacts.pop();
		writeContacts(contacts)
		return('Last Contact deleted')

	} catch (error){
		console.log(error);
	}
};

removeLastContact();
