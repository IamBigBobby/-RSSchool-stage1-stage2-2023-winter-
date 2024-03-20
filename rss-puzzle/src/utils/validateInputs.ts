export default function validateInputs(): void {
  const nameInput = document.querySelector('.name-input') as HTMLInputElement;
  const surnameInput = document.querySelector(
    '.surname-input',
  ) as HTMLInputElement;
  const loginButton = document.querySelector(
    '.log-in-button',
  ) as HTMLButtonElement;

  function validate() {
    if (nameInput.value.trim() !== '' && surnameInput.value.trim() !== '') {
      loginButton.removeAttribute('disabled');
    } else {
      loginButton.setAttribute('disabled', 'disabled');
    }
  }

  nameInput.addEventListener('input', validate);
  surnameInput.addEventListener('input', validate);
}
