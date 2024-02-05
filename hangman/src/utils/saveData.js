import { trueAnswer } from './generadeQuestion';

export { saveGameForRealode };
function saveGameForRealode(
  answer,
  question,
  countFail,
  loadAswer,
  disabledKey,
) {
  let storedGameState = localStorage.getItem('IamBigBobby_hangmanGameState');
  let gameState;

  if (storedGameState) {
    gameState = JSON.parse(storedGameState);
    gameState.answer = answer;
    gameState.question = question;
    gameState.countFail = countFail;
    gameState.loadAswer = loadAswer;
    gameState.disabledKeys.push(disabledKey);
  } else {
    gameState = {
      answer: answer,
      question: question,
      countFail: countFail,
      loadAswer: loadAswer,
      disabledKeys: [],
    };
    gameState.disabledKeys.push(disabledKey);
  }

  localStorage.setItem(
    'IamBigBobby_hangmanGameState',
    JSON.stringify(gameState),
  );
}
