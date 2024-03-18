import { destroyPage } from './destroyPage';
import { firstGameStart } from './firstStart';

export function createGreetingsField(): void {
  const body = document.body;
  const greetingsWrapper = document.createElement('div');
  greetingsWrapper.classList.add('greetings-wrapper');
  body.appendChild(greetingsWrapper);

  const greetingsWrapperCreated = document.querySelector('.greetings-wrapper');

  const sayHi = document.createElement('div');
  sayHi.classList.add('say-hi');
  sayHi.innerHTML = `Hello! This is RSS-PUZZLE!<br>It's created by Denis Svetleishii RS-2023q4.<br>In this game you have to solve a puzzle made up of sentences in English and paintings by great artists at the same time!<br>Enjoy!`;

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

  starPlay.addEventListener('click', function () {
    destroyPage();
    firstGameStart();
  });
}
