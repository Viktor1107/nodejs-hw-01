import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
	try{
		await writeContacts([]);
console.log("remove all contacts")

	} catch(error){
		console.log(error);
		
	}
};

removeAllContacts();
