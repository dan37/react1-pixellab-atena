import notificationBar, {
  addMessage,
  clearMessages,
} from './notificationBar.js';
import {
  createContact,
  createPet,
  deleteContact,
  findContact,
  updateContact,
} from './query.js';
import createMessage from './message.js';
import { render as renderEditContact } from './editContact.js';
import { render as renderPetForm } from './addPetForm.js';

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

  // voi folositi metoda de la teme
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

  createPet(contactId.value, {
    name: name.value,
    species: species.value,
    age: age.value,
    id: Number(Date.now().toString().slice(-6)),
  });

  // cum putem sa afisam pet created for contact Carol

  // folositi metoda de clear stage
  // stage.innerHTML = '';

  clearStage();

  addMessage(
    createMessage(`Pet ${name.value} created for contact ${contactId.value}`),
  );
});

export default stage;

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
