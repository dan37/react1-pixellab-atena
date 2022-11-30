import { findContacts } from './query.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // currentTarget este elementul pe care
  // am rulat addEventListener
  const form = event.currentTarget;
  const queryInput = form.q;
  const queryString = queryInput.value;

  const contacts = findContacts(queryString);

  if (contacts.length < 1) {
    console.log(' no contacts found');
  }
});

export default searchForm;
