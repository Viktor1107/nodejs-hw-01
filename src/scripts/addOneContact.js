import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";




export const addOneContact = async () => {
	try{
		const constants = await readContacts();
		const newContact = createFakeContact();
		const updatedContacts = [...constants, newContact]
		await writeContacts(updatedContacts)
	} catch(error){
		console.log(error)

	}
};

addOneContact();
