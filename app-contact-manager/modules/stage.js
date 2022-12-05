import { createContact } from './query.js';

const stage = document.querySelector('.stage');

// cancel action button
stage.addEventListener('click', (event) => {
  const { target } = event;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('cancel-button')
  ) {
    return;
  }

  stage.innerHTML = '';
});

// create contact
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'FORM' || !target.classList.contains('add-contact')) {
    return;
  }

  const form = target;

  createContact({});
});

export default stage;
