export { loadGameData };

function loadGameData() {
  let gameState = localStorage.getItem('hangmanGameState');
  return gameState ? JSON.parse(gameState) : null;
}
