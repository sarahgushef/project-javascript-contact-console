// // This is Array of object

const myContacts = [
  {
    id: 1,
    name: "Alpha Avalon",
    phone: "+1 111 101010",
    email: "alpha@avalon.org",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool"],
    organization: "Impact Byte"
  },
  {
    id: 2,
    name: "Betty Brave",
    phone: "+62 812 242424",
    email: "betty@braverian.com",
    tags: ["pretty"],
    organization: ""
  },
  {
    id: 3,
    name: "Gamma Gacurio",
    phone: "+63 813 363636",
    email: "gamma@gacurio.dev",
    tags: ["cute"],
    organization: "Impact Byte"
  }
];

// // Show Contacts

console.log("Show Contacts from Array of object:");
const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}> ${
        contact.tags[0] // it would not be error if all contacts has tags, because it loops all contacts
      }`
    );
  }
};

showContacts(myContacts);

console.log("");

//  Filter Contacts

console.log("Show filtered contacts from array of object:");
const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = [];

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact);
    }
  }

  return newContacts;
};

const filteredContacts = filterContacts(myContacts, 11);
showContacts(filteredContacts);

console.log("");

// // Add key to array of object

console.log("Add nationality to contacts");
const addNationality = () => {
  for (let index = 0; index < myContacts.length; index++) {
    let itemInContacts = myContacts[index];

    itemInContacts.nationality = "Indonesian";
  }

  console.log(myContacts);
};

addNationality();
console.log("");
