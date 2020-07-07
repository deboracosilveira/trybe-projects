// Variables
const button = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

// Button alert event
function alertUser() {
  const info = userEmailPhone.value;
  alert(info);
}

button.addEventListener('click', alertUser);
