import { createRandomGame } from "./createRandomGame";
import { playerLogic } from "./playerLogic";
import { startNewGame } from "./startNewGame";

export { popUpWin };

function popUpWin() {
  const createPopUpWinBackground = document.createElement("div");
  createPopUpWinBackground.classList = "pop-up-win__background";

  const seconds = getWinTime();

  createPopUpWinBackground.innerHTML = `
  <div class="pop-up-win__content">
  <p>Great! You have solved the nonogram in ${seconds} seconds!</p>
  <div class="pop-up-win__buttons">
  <button class="pop-up-win__button-random">random game</button>
  <button class="pop-up-win__button-new-game">new game</button>
  </div>
  </div>
  `;
  document.body.prepend(createPopUpWinBackground);

  const popUpWinBackground = document.querySelector(".pop-up-win__background");
  popUpWinBackground.addEventListener("mousedown", closePopUp);

  const theme = document.querySelector(
    ".nonograms__menu__toggle-theme"
  ).textContent;
  const popUpContent = document.querySelector(".pop-up-win__content");

  if (theme === "theme: dark") {
    popUpContent.style.color = "black";
  }

  const randomButton = document.querySelector(".pop-up-win__button-random");
  randomButton.addEventListener("mousedown", closePopUp);
  randomButton.addEventListener("mousedown", createRandomGame);

  const newGameButton = document.querySelector(".pop-up-win__button-new-game");
  newGameButton.addEventListener("mousedown", closePopUp);
}

function getWinTime() {
  const winTime = document.querySelector(".nonograms__timer").textContent;

  const minute = Number(winTime.slice(0, 2));
  const seconds = Number(winTime.slice(3, winTime.length));

  const countingSecond = minute * 60 + seconds;
  return countingSecond;
}

function closePopUp(event) {
  if (
    event.target.classList.contains("pop-up-win__background") ||
    event.target.classList.contains("pop-up-win__button-random") ||
    event.target.classList.contains("pop-up-win__button-new-game") ||
    event.target.classList.contains("pop-up-win__button-close")
  ) {
    const popUp = document.querySelector(".pop-up-win__background");
    popUp.remove();

    startNewGame();
    playerLogic();
  }
}
