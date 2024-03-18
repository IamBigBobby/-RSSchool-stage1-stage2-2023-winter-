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
  name.type = 'text';
  name.style.display = 'block';
  name.placeholder = 'First Name';
  name.required = true;
  inputContainer.appendChild(name);

  const surname = document.createElement('input');
  surname.type = 'text';
  surname.style.display = 'block';
  surname.placeholder = 'Surname';
  name.required = true;
  inputContainer.appendChild(surname);
}
