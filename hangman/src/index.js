import { renderMain, renderGallow } from './utils/generateField.js';
import {
  renderKeyboard,
  renderWrapperKeyboard,
} from './utils/renderKeyboard.js';
import { eventsKeyboard } from './utils/eventsKeyboard.js';
import { createQuestion } from './utils/generadeQuestion.js';
import { loadGameData } from './utils/loadData.js';

document.addEventListener('DOMContentLoaded', function () {
  let saveGameState = loadGameData();
  saveGameState = null;
  console.log(saveGameState);

  if (saveGameState) {
    let answer = saveGameState.answer;
    let question = saveGameState.question;
    let countFail = saveGameState.countFail;
  } else {
    // render field
    renderMain();
    renderGallow();

    // render keyboard
    renderWrapperKeyboard();
    renderKeyboard();

    // listen event keydoard
    eventsKeyboard();

    // generateQuestionBlock
    createQuestion();
  }
});
