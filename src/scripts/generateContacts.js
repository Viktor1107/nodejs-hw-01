import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
	try{
		const contacts = await readContacts();
		const newContact = Array.from({length: number} , createFakeContact)
		const updatedContacts = [...contacts, ...newContact]
		await writeContacts(updatedContacts)
	} catch(error){
		console.log(error)
	}
};

generateContacts(5);
