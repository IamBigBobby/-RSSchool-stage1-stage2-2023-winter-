export { playerLogic, clickLogic };
import { popUpWin } from "./appearingPopUpWin";
import { countingTrueCells } from "./countingAnswersCells";
import { activateTimer, stopTimer, currentSeconds } from "./timer";
import { getWinGame, sortWinGame } from "./getWinGame";
import { leftClickSound, rightClickSound, winSound } from "./makeSound";

function playerLogic() {
  const table = document.querySelector(".table-nonograms");
  const cells = document.querySelectorAll(".table-nonograms__cell");

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
  table.addEventListener("mousedown", clickLogic);
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", leftClickSound);
    cell.addEventListener("mousedown", rightClickSound);
  });
}

function clickLogic(event) {
  const click = event.target;
  const mouseButton = event.button;

  activateTimer();

  if (mouseButton === 0) {
    if (
      click.classList.contains("table-nonograms__cell") &&
      !click.classList.contains("table-nonograms_player-cross")
    ) {
      click.classList.toggle("table-nonograms_player-point");
      checkWin();
    }
  }

  if (mouseButton === 2) {
    event.preventDefault();

    if (
      click.classList.contains("table-nonograms__cell") &&
      !click.classList.contains("table-nonograms_player-point")
    ) {
      click.classList.toggle("table-nonograms_player-cross");
    }
  }
}

function checkWin() {
  const trueCellsCounting = countingTrueCells();
  const trueCellsGame = document.querySelectorAll(
    ".table-nonograms__cell.table-nonograms__cell_answer.table-nonograms_player-point"
  );
  const pickCellsGame = document.querySelectorAll(
    ".table-nonograms_player-point"
  );
  const answerCellsGame = document.querySelectorAll(
    ".table-nonograms__cell_answer"
  );

  console.log(trueCellsCounting, trueCellsGame.length);

  if (
    trueCellsCounting === trueCellsGame.length &&
    pickCellsGame.length === answerCellsGame.length
  ) {
    console.log("you win!");
    const table = document.querySelector(".table-nonograms");
    table.removeEventListener("mousedown", clickLogic);
    popUpWin();

    const lvlInformation = document
      .querySelector(".top-menu-nonograms__game-info")
      .textContent.replace("Difficulty:", "")
      .replace("Level:", "")
      .replace(/\s/g, "")
      .split("/");

    const [difficulty, lvl] = lvlInformation;
    getWinGame(lvl, difficulty, currentSeconds);

    winSound();

    stopTimer();
  } else {
    console.log("not yet");
  }
}
