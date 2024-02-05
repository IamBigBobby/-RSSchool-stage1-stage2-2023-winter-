export { getDifficulty, showInfoAboutGame };

let difficulty;

function getDifficulty(event) {
  difficulty = event.target.textContent;
}

function showInfoAboutGame(event) {
  const lvl = event.target.textContent;

  if (difficulty === undefined) {
    difficulty = "easy";
  }

  const gameInfo = document.querySelector(".top-menu-nonograms__game-info");
  gameInfo.innerHTML = `Difficulty: ${difficulty} / Level: ${lvl}`;
}
