export default (message = '', type = 'success') => {
  const generalContainer = document.createElement('div');
  generalContainer.classList.add(
    'gen-container',
    'd-flex',
    'justify-content-between',
    'gap-2',
  );
  const messageContainer = document.createElement('div');

  messageContainer.classList.add(
    'msg-container',
    'alert',
    `alert-${type}`,
    'col-11',
  );
  messageContainer.innerText = message;

  generalContainer.append(messageContainer);

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button', 'h-50', 'py-3');

  closeButton.textContent = 'close';
  generalContainer.append(closeButton);

  //Tema daca mesajul este ..punem pe buton classa watning , pentru alt caz punem alta clasa
  if (message == 'No contacts found!') {
    closeButton.classList.add('btn', 'btn-warning');
  } else {
    closeButton.classList.add('btn', 'btn-danger');
  }

  const removeDelay = () => {
    messageContainer.remove(); //merge si cu return ..dar nu stiu cum este mai bine
    closeButton.remove(); //aici nu stiu daca e bine sa sterg si buttonul. Daca nu il sterg se muta in stanga.
  };

  setTimeout(removeDelay, 2000);

  return generalContainer;
};
