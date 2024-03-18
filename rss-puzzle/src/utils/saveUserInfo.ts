export function saveUserInfo(): void {
  const loginButton = document.querySelector('.log-in-button');

  const nameInput = document.querySelector('.name-input') as HTMLInputElement;
  const surnameInput = document.querySelector(
    '.surname-input'
  ) as HTMLInputElement;

  loginButton.addEventListener('click', function () {
    localStorage.setItem('IamBigBobby_name', nameInput.value);
    localStorage.setItem('IamBigBobby_surname', surnameInput.value);
  });
}
