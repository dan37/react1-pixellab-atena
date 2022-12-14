export default (message = '', type = 'success') => {
  const generalContainer = document.createElement('div');
  generalContainer.classList.add('row');
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', `alert-${type}`, 'col-8');
  messageContainer.innerText = message;
  generalContainer.append(messageContainer);
  const divcontainer = document.createElement('div');
  divcontainer.classList.add('col-3');
  generalContainer.append(divcontainer);
  const closeButton = document.createElement('button');
  closeButton.classList.add('btn', 'btn-danger', 'btn-lg');
  closeButton.textContent = 'close';
  divcontainer.append(closeButton);

  return generalContainer;
};
