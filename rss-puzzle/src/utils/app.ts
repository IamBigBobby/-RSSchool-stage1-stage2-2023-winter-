import { main } from '../componets/tagsFarm';
import { setDifficulty } from './difficulty';

export function createApp(): void {
  const app = main('main');
  const selectLevel = document.createElement('select');
  const selectRound = document.createElement('select');
  const buttonHintImg = document.createElement('button');
  selectLevel.classList.add('selector-lvl');
  selectRound.classList.add('select-round');
  buttonHintImg.classList.add('button-hint-img');

  buttonHintImg.textContent = 'Show background';

  const body = document.body;
  body.appendChild(app.getNode());
  body.prepend(buttonHintImg);
  body.prepend(selectRound);
  body.prepend(selectLevel);

  setDifficulty();
}
