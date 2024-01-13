export { refreshGame };
import { nextStageEnter } from './appearancePopupLose.js';
import { eventsKeyboard } from './eventsKeyboard.js';
import { createQuestion } from './generadeQuestion.js';
import { renderMain, renderGallow } from './generateField.js';
import { renderKeyboard, renderWrapperKeyboard } from './renderKeyboard.js';

function refreshGame() {
  const popUp = document.querySelector('.popup');
  popUp.remove();

  const pastGame = document.querySelector('.main');
  pastGame.remove();

  document.removeEventListener('keydown', nextStageEnter);

  renderMain();
  renderGallow();
  renderWrapperKeyboard();
  renderKeyboard();
  eventsKeyboard();
  createQuestion();
}
