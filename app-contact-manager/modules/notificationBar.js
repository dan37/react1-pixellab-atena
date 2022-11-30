const notificationBar = document.querySelector('.notification-bar');

export const addMessage = (messageElement) => {
  notificationBar.append(messageElement);
};

export default notificationBar;
