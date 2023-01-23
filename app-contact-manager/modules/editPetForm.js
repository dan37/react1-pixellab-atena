import { findContact, findPet } from './query.js';

export const render = (contactId, petId) => {
  const container = document.createElement('form');
  const pet = findPet(petId);
  const { id, name, species, age } = pet;
  container.classList.add('edit-pet');
  container.innerHTML = `
  <h4>Editing pet ${name}</h4>

  <input type="hidden" name="id" value="${id}">
  <label class="form-label mt-2">Name</label>
  <input type="text"
    name="name"
    class="form-control form-control-sm"
    value="${name}"
  >

  <label class="form-label mt-2">Species</label>
  <input type="text"
    name="species"
    class="form-control form-control-sm"
    value="${species}"
  >

  <label class="form-label mt-2">Age</label>
  <input type="text"
    name="age"
    class="form-control form-control-sm"
    value="${age}"
  >

  <div class="mt-2">
      <button type="submit"
        title="Save"
        class="btn btn-secondary me-1"
      >Save</button>

      <button type="button"
        title="Cancel"
        class="btn btn-secondary cancel-button"
      >Cancel</button>
    </div>
`;
  return container;
};
