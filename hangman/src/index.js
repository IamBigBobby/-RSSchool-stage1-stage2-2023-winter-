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
  // saveGameState = null;
  // console.log(saveGameState);

  // render field
  renderMain();

  if (saveGameState) {
    let answer = saveGameState.answer;
    let question = saveGameState.question;
    let countFail = saveGameState.countFail;

    console.log(answer, question, countFail);
    // render load galow
    renderGallow(countFail);

    // render keyboard
    renderWrapperKeyboard();
    renderKeyboard();

    // render load answer and question
    createQuestionBlock(answer, question);

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

    // generateQuestionBlock
    createQuestion();
  }
});
