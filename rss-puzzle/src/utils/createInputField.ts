import { validateInputs } from './validateInputs';

export function createInputField(): void {
  const body = document.body;

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');

  body.appendChild(inputContainer);
  const greetings = document.createElement('div');
  greetings.classList.add('greetings');
  greetings.textContent = 'Greetings!';
  inputContainer.appendChild(greetings);

  const name = document.createElement('input');
  name.classList.add('name-input');
  name.type = 'text';
  name.style.display = 'block';
  name.placeholder = 'First Name';
  name.required = true;
  inputContainer.appendChild(name);

  const surname = document.createElement('input');
  surname.classList.add('surname-input');
  surname.type = 'text';
  surname.style.display = 'block';
  surname.placeholder = 'Surname';
  surname.required = true;
  inputContainer.appendChild(surname);

  const loginButton = document.createElement('button');
  loginButton.classList.add('log-in-button');
  loginButton.textContent = 'Login';
  loginButton.style.display = 'block';
  loginButton.disabled = true;
  inputContainer.appendChild(loginButton);

  validateInputs();
}
