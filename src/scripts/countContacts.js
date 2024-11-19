import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
	try{
		const contacts = await readContacts();
		const total = contacts.length;
		return total;

	} catch(error){
		console.log(error);
		
	}

};

console.log(await countContacts());
