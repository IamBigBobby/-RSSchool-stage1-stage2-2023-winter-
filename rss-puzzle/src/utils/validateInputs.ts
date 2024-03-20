export function validateInputs(): void {
  const nameInput = document.querySelector('.name-input') as HTMLInputElement;
  const surnameInput = document.querySelector(
    '.surname-input',
  ) as HTMLInputElement;
  const loginButton = document.querySelector(
    '.log-in-button',
  ) as HTMLButtonElement;
  const inputContainer = document.querySelector('.input-container');

  nameInput.addEventListener('input', validateInputs);
  surnameInput.addEventListener('input', validateInputs);

  function validateInputs() {
    if (nameInput.value.trim() !== '' && surnameInput.value.trim() !== '') {
      loginButton.removeAttribute('disabled');
    } else {
      loginButton.setAttribute('disabled', 'disabled');
    }
  }
}
