// eslint-disable-next-line import/extensions
import destroyPage from './destroyPage';
import firstGameStart from './firstStart';

export default function createGreetingsField(): void {
  const name = localStorage.getItem('IamBigBobby_name');
  const surname = localStorage.getItem('IamBigBobby_surname');

  const { body } = document;
  const greetingsWrapper = document.createElement('div');
  greetingsWrapper.classList.add('greetings-wrapper');
  body.appendChild(greetingsWrapper);

  const greetingsWrapperCreated =
    document.querySelector<HTMLDivElement>('.greetings-wrapper');

  if (greetingsWrapperCreated) {
    const sayHi = document.createElement('div');
    sayHi.classList.add('say-hi');
    sayHi.innerHTML = `Hello ${name} ${surname}! This is RSS-PUZZLE!<br>It's created by Denis Svetleishii RS-2023q4.<br>In this game you have to solve a puzzle made up of sentences in English and paintings by great artists at the same time!<br>Enjoy!`;

    greetingsWrapperCreated.appendChild(sayHi);

    const starPlay = document.createElement('button');
    starPlay.classList.add('start-play');
    starPlay.textContent = 'Start';
    greetingsWrapperCreated.appendChild(starPlay);

    starPlay.addEventListener('click', () => {
      destroyPage();
      firstGameStart();
    });
  }
}
