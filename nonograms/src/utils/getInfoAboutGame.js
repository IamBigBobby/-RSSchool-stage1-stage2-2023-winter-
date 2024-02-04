export { getDifficulty, showInfoAboutGame };

let difficulty;

function getDifficulty(event) {
  difficulty = event.target.textContent;
  console.log(difficulty);
}

function showInfoAboutGame(event) {
  console.log(difficulty, event.target.textContent);
  const lvl = event.target.textContent;

  const gameInfo = document.querySelector(".top-menu-nonograms__game-info");
  gameInfo.innerHTML = `Difficulty: ${difficulty} / Level: ${lvl}`;
}
