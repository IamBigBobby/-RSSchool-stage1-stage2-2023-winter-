export { refreshGame };
import { nextStageEnterLose } from './appearancePopupLose.js';
import { nextStageEnterWin } from './appearancePopupWin.js';
import { eventsKeyboard } from './eventsKeyboard.js';
import { createQuestion } from './generadeQuestion.js';
import { renderMain, renderGallow } from './generateField.js';
import { renderKeyboard, renderWrapperKeyboard } from './renderKeyboard.js';

function refreshGame() {
  const popUp = document.querySelector('.popup');
  popUp.remove();
  const pastGame = document.querySelector('.main');
  pastGame.remove();

  document.removeEventListener('keypress', nextStageEnterLose);
  document.removeEventListener('keypress', nextStageEnterWin);

  renderMain();
  renderGallow();
  renderWrapperKeyboard();
  renderKeyboard();
  eventsKeyboard();
  createQuestion();
}
