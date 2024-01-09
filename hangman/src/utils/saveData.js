export { saveGameForRealode };
function saveGameForRealode(answer, question, countFail) {
  let gameState = {
    answer: answer,
    question: question,
    countFail,
  };

  localStorage.setItem('hangmanGameState', JSON.stringify(gameState));
}
