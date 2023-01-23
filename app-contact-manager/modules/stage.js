import notificationBar, {
  addMessage,
  clearMessages,
} from './notificationBar.js';
import {
  createContact,
  createPet,
  deleteContact,
  findContact,
  findPet,
  updateContact,
  updatePet,
} from './query.js';
import createMessage from './message.js';
import { render as renderEditContact } from './editContact.js';
import { render as renderPetForm } from './addPetForm.js';
import { render as renderEditPetForm } from './editPetForm.js';

const stage = document.querySelector('.stage');
export const clearStage = () => {
  //tema functie refactorizare
  stage.innerHTML = '';
};

// cancel action button
stage.addEventListener('click', (event) => {
  const { target } = event;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('cancel-button')
  ) {
    return;
  }
  clearStage();
  // stage.innerHTML = ''; // clearStage();
});

// create contact
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'FORM' || !target.classList.contains('add-contact')) {
    return;
  }

  const form = target;
  // these are HTML elements:
  const { name, surname, phone, email } = form;
  const contact = {
    id: Number(Date.now().toString().slice(-6)),
    name: name.value,
    surname: surname.value,
    phone: phone.value,
    email: email.value,
  };

  createContact(contact);

  addMessage(createMessage(`Contact ${name.value} ${surname.value} created.`));

  // stage.innerHTML = '';
  clearStage();
});

//TEMA daca elementul este de tip buton si are clasa close-button dam remove la divul notify bar
notificationBar.addEventListener('click', (event) => {
  event.preventDefault();
  const { target } = event;

  if (
    target.nodeName == 'BUTTON' &&
    target.classList.contains('close-button') //vad ca, merge si daca sterg conditia asta dar asa pare mai specific
  ) {
    notificationBar.remove();
  }
});

// delete contact
stage.addEventListener('click', (event) => {
  const { target } = event;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('delete-contact')
  ) {
    return;
  }

  const button = target;
  const parent = button.parentElement;
  const contactId = Number(parent.dataset.contactId);

  deleteContact(contactId);
  parent.remove();

  clearMessages();

  addMessage(createMessage('Contact removed', 'danger'));
});

// edit contact button
stage.addEventListener('click', (event) => {
  const { target } = event;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('edit-contact-button')
  ) {
    return;
  }

  const button = target;
  const parentElement = button.parentElement;
  const contactId = Number(parentElement.dataset.contactId);
  const contact = findContact(contactId);

  // stage.innerHTML = '';

  clearStage();

  stage.append(renderEditContact(contact));
});

// edit contact submit
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (
    target.nodeName !== 'FORM' ||
    !target.classList.contains('edit-contact')
  ) {
    return;
  }

  const form = target;
  // DOM elements (need .value)
  const { name, surname, phone, email, id } = form;
  const contactId = id.value;
  const contact = findContact(contactId);

  updateContact(contactId, {
    name: name.value,
    surname: surname.value,
    phone: phone.value,
    email: email.value,
  });

  // stage.innerHTML = '';
  clearStage();

  clearMessages();

  addMessage(
    createMessage(`Contact ${contact.name} ${contact.surname} updated.`),
  );
});

// add pet button
stage.addEventListener('click', (event) => {
  const { target } = event;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('add-pet-button')
  ) {
    return;
  }

  const button = target;
  const parentElement = button.parentElement;
  const contactId = parentElement.dataset.contactId;

  // stage.innerHTML = '';
  clearStage();

  stage.append(renderPetForm(contactId));
});

// create pet submit
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'FORM' || !target.classList.contains('add-pet')) {
    return;
  }

  const form = target;
  // DOM input elements

  const { name, species, age, contactId } = form;

  //extragere contact din query
  const contact = findContact(contactId.value);
  const contactName = contact.name;
  const contactSurname = contact.surname;

  createPet(contactId.value, {
    name: name.value,
    species: species.value,
    age: age.value,
    id: Number(Date.now().toString().slice(-6)),
  });

  // stage.innerHTML = '';

  clearStage();

  addMessage(
    createMessage(
      `Pet ${name.value} with id ${contactId.value} is created for contact ${contactName} ${contactSurname}`,
    ),
  );
});

//edit pet
stage.addEventListener('click', (event) => {
  const { target } = event;
  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('edit-pet-button')
  ) {
    return;
  }

  const button = target;
  const parentElement = button.parentElement;
  const contactId = Number(parentElement.dataset.contactId);
  const petId = Number(parentElement.dataset.petId);
  // stage.innerHTML = '';

  clearStage();

  stage.append(renderEditPetForm(contactId, petId));
});

// edit submit pet
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'FORM' || !target.classList.contains('edit-pet')) {
    return;
  }

  const form = target;
  // DOM elements (need .value)
  const { id, species, age, name } = form;
  const petId = id.value;
  const pet = findPet(petId);

  //update pet
  updatePet(petId, {
    name: name.value,
    species: species.value,
    age: age.value,
  });

  // stage.innerHTML = '';
  clearStage();

  clearMessages();

  addMessage(createMessage(`Contact ${pet.name} ${pet.age} updated.`));
});

export default stage;
