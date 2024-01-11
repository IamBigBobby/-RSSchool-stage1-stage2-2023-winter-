import { trueAnswer } from './generadeQuestion';

export { saveGameForRealode };
function saveGameForRealode(
  answer,
  question,
  countFail,
  loadAswer,
  disabledKey,
) {
  let storedGameState = localStorage.getItem('hangmanGameState');
  let gameState;

  if (storedGameState) {
    gameState = JSON.parse(storedGameState);
  } else {
    gameState = {
      answer: answer,
      question: question,
      countFail: countFail,
      loadAswer: loadAswer,
      disabledKeys: [],
    };
  }
  gameState.disabledKeys.push(disabledKey);

  localStorage.setItem('hangmanGameState', JSON.stringify(gameState));
}
