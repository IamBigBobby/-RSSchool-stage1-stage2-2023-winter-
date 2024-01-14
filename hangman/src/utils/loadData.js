export { loadGameData };

function loadGameData() {
  let gameState = localStorage.getItem('IamBigBobby_hangmanGameState');
  return gameState ? JSON.parse(gameState) : null;
}
