import { main } from '../componets/tagsFarm';

export function createApp(): void {
  const app = main('main');
  const selectLevel = document.createElement('select');
  const selectRound = document.createElement('select');
  selectLevel.classList.add('selector-lvl');
  selectRound.classList.add('select-round');

  const body = document.body;
  body.appendChild(app.getNode());
  body.prepend(selectRound);
  body.prepend(selectLevel);
}
