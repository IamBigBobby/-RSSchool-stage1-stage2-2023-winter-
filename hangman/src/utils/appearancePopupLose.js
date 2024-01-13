import { refreshGame } from './refreshGame.js';
import { removeListeners } from './removeListeners.js';

export { popupLose, nextStageEnter };

function popupLose(word) {
  removeListeners();

  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="popup__content">
    <div class="popup__content-info">Unfortunately you wasted your attempts, the answer was ${word}.</div>
    <button class="button">Next try</button>
  </div>
  `;
  document.body.prepend(popup);

  const button = document.querySelector('.button');

  button.addEventListener('click', refreshGame);

  document.addEventListener('keydown', nextStageEnter);
}

function nextStageEnter(event) {
  if (event.key === 'Enter') {
    refreshGame();
  }
}
