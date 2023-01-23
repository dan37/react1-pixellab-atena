export default (message = '', type = 'success') => {
  const messageContainer = document.createElement('div');

  messageContainer.classList.add(
    'msg-container',
    'alert',
    `alert-${type}`,
    'd-flex',
    'justify-content-between',
    'align-items-center',
  );
  messageContainer.innerText = message;

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button', 'h-50', 'py-3');

  closeButton.textContent = 'close';
  messageContainer.append(closeButton);

  //Tema daca mesajul este ..punem pe buton classa warning , pentru alt caz punem alta clasa.

  if (message == 'No contacts found!') {
    closeButton.classList.add('btn', 'btn-warning');
  } else {
    closeButton.classList.add('btn', 'btn-danger');
  }

  // const removeDelay = () => {
  //   messageContainer.remove();
  //   // closeButton.remove();
  // };

  // setTimeout(removeDelay, 2000);

  return messageContainer;
};
