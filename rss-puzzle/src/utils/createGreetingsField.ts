export function createGreetingsField(): void {
  const body = document.body;
  const greetingsWrapper = document.createElement('div');
  greetingsWrapper.classList.add('greetings-wrapper');
  body.appendChild(greetingsWrapper);

  const greetingsWrapperCreated = document.querySelector('.greetings-wrapper');

  const sayHi = document.createElement('div');
  sayHi.classList.add('say-hi');
  sayHi.textContent = `Hello! This app create by Denis Svetleihii RS-2023Q4! `;
  greetingsWrapperCreated.appendChild(sayHi);

  const fine = document.createElement('img');
  fine.classList.add('fine');
  fine.src = `../src/assets/fine.jpg`;
  fine.style.display = 'block';
  greetingsWrapperCreated.appendChild(fine);

  const starPlay = document.createElement('button');
  starPlay.classList.add('start-play');
  starPlay.textContent = 'Start';
  greetingsWrapperCreated.appendChild(starPlay);
}
