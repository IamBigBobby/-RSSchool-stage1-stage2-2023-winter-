import { main } from '../componets/tagsFarm';
import { setDifficulty } from './difficulty';
import { logOut } from './logOut';
import { showBackground } from './toggleBackgroundHint';
import { showTranslation } from './toggleTranslationHint';

export function createApp(): void {
  const app = main('main');
  const selectLevel = document.createElement('select');
  const selectRound = document.createElement('select');
  const buttonHintImg = document.createElement('button');
  const buttonHintTranslation = document.createElement('button');
  const logOutButton = document.createElement('button');
  const buttonContainer = document.createElement('div');

  selectLevel.classList.add('selector-lvl');
  selectRound.classList.add('select-round');
  buttonHintImg.classList.add('button-hint-img');
  buttonHintTranslation.classList.add('button-hint-translation');
  logOutButton.classList.add('button-log-out');
  buttonContainer.classList.add('button-container');

  buttonHintImg.textContent = 'Show background: off';
  buttonHintTranslation.textContent = 'Show translate: off';
  logOutButton.textContent = 'Logout';

  const { body } = document;
  body.appendChild(app.getNode());
  body.prepend(logOutButton);
  body.prepend(buttonHintTranslation);
  body.prepend(buttonHintImg);
  body.prepend(selectRound);
  body.prepend(selectLevel);

  showTranslation();
  showBackground();
  setDifficulty();
  logOut();
}
