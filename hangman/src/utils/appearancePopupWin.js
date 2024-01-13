import { refreshGame } from './refreshGame.js';
import { removeListeners } from './removeListeners.js';

export { popupWin };

function popupWin(word) {
  removeListeners();

  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="popup__content">
    <div class="popup__content-info">Good game! You were right, the answer was ${word}!</div>
    <button class="button">Next question</button>
  </div>
  `;
  document.body.prepend(popup);

  const button = document.querySelector('.button');

  button.addEventListener('click', refreshGame);

  document.addEventListener('keypress', nextStageEnter);
}

function nextStageEnter(event) {
  if (event.key === 'Enter') {
    refreshGame();
  }
}
