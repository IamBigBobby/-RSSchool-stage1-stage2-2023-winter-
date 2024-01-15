import { renderMain, renderGallow } from './utils/generateField.js';
import {
  renderKeyboard,
  renderWrapperKeyboard,
} from './utils/renderKeyboard.js';
import { eventsKeyboard } from './utils/eventsKeyboard.js';
import {
  creatFailedAttemptCounter,
  createQuestion,
  createQuestionBlock,
} from './utils/generadeQuestion.js';
import { loadGameData } from './utils/loadData.js';

// loadGameData();

document.addEventListener('DOMContentLoaded', function () {
  let saveGameState = loadGameData();

  // render field
  renderMain();

  if (saveGameState) {
    let answer = saveGameState.answer;
    let question = saveGameState.question;
    let countFail = saveGameState.countFail;
    let loadAswer = saveGameState.loadAswer;
    let disabledKeys = saveGameState.disabledKeys;

    // render load galow
    renderGallow(countFail);

    // render keyboard
    renderWrapperKeyboard();
    renderKeyboard(disabledKeys);

    // render load answer and question
    createQuestionBlock(answer, question, loadAswer);

    // render load failed counter
    creatFailedAttemptCounter(countFail);

    // listen event keydoard
    eventsKeyboard();
  } else {
    // render gallow
    renderGallow();

    // render keyboard
    renderWrapperKeyboard();
    renderKeyboard();

    // listen event keydoard
    eventsKeyboard();

    // // generateQuestionBlock
    createQuestion();
  }
});
