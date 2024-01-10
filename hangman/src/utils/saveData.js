import { trueAnswer } from './generadeQuestion';

export { saveGameForRealode };
function saveGameForRealode(answer, question, countFail, loadAswer) {
  let gameState = {
    answer: answer,
    question: question,
    countFail: countFail,
    loadAswer: loadAswer,
  };

  localStorage.setItem('hangmanGameState', JSON.stringify(gameState));
}
