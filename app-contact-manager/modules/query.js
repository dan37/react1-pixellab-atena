import contacts from './data.js';
export const findContacts = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    const values = Object.values(contact);
    // [1, 'Carol', 'Carolson', '0744', 'caolr@carol.ro']

    const haystack = values.reduce((haystack, value) => {
      if (typeof value === 'string') {
        haystack += value.toLowerCase(); //tema toLowerCase
      }

      return haystack; //merge si aici pus toLowerCase.
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });

  return results;
};

export const createContact = (contact) => {
  // push mutates
  contacts.push(contact);
};

export const deleteContact = (contactId) => {
  let contactIndex = -1;

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contactId === contact.id) {
      contactIndex = i;

      break;
    }
  }

  if (contactIndex >= 0) {
    // splice mutates
    contacts.splice(contactIndex, 1);
  }
};

export const findContact = (contactId) => {
  const contact = contacts.find((contact) => {
    return contact.id === Number(contactId);
  });

  return contact;
};

export const updateContact = (contactId, { name, surname, phone, email }) => {
  const contact = findContact(contactId);

  if (!contact) {
    return;
  }

  contact.name = name;
  contact.surname = surname;
  contact.phone = phone;
  contact.email = email;
};

export const createPet = (contactId, pet) => {
  const contact = findContact(contactId);

  if (contact === undefined) {
    return;
  }

  contact.pets = contact.pets || [];

  // push mutates
  contact.pets.push(pet);
};

//edit pet
export const findPet = (petId) => {
  let pet = null;
  contacts.forEach((currentContact) => {
    const pets = currentContact.pets ?? null;

    if (pets) {
      pets.forEach((currentPet) => {
        if (currentPet.id === Number(petId)) {
          pet = currentPet;
        }
      });
    }
  });

  return pet;
};

//update pet
export const updatePet = (petId, { name, species, age }) => {
  // const name = contact.name;
  const pet = findPet(petId);

  if (!pet) {
    return;
  }

  pet.name = name;
  pet.species = species;
  pet.age = age;
};
