export const render = (contact) => {
  const { name, surname, phone, email, pets = [] } = contact;
  const container = document.createElement('article');
  container.classList.add('contact', 'border', 'p-3', 'mb-4');

  container.innerHTML = `
    <h1>${name + ' ' + surname}</h1>
    <ul>
      <li>${phone}</li>
      <li>${email}</li>
    </ul>

    <button title="Delete"
      type="button"
      class="btn btn-secondary"
    >Delete</button>

    <button title="Edit"
      type="button"
      class="btn btn-secondary mx-2"
    >Edit</button>

    <button title="Add Pet"
      type="button"
      class="btn btn-secondary"
    >Add Pet</button>
    `;

  return container;
};
