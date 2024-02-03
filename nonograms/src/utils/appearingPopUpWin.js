import { playerLogic } from "./playerLogic";
import { startNewGame } from "./startNewGame";

export { popUpWin };

function popUpWin() {
  console.log("pop up win");
  const createPopUpWinBackground = document.createElement("div");
  createPopUpWinBackground.classList = "pop-up-win__background";

  const seconds = getWinTime();

  createPopUpWinBackground.innerHTML = `
  <div class="pop-up-win__content">
  <p>Great! You have solved the nonogram in ${seconds} seconds!</p>
  </div>
  `;
  document.body.prepend(createPopUpWinBackground);

  const popUpWinBackground = document.querySelector(".pop-up-win__background");
  popUpWinBackground.addEventListener("mousedown", closePopUp);
}

function getWinTime() {
  const winTime = document.querySelector(".nonograms__timer").textContent;

  const minute = Number(winTime.slice(0, 2));
  const seconds = Number(winTime.slice(3, winTime.length));

  const countingSecond = minute * 60 + seconds;
  return countingSecond;
}

function closePopUp() {
  const popUp = document.querySelector(".pop-up-win__background");
  popUp.remove();

  startNewGame();
  playerLogic();
}
