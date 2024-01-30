export { playerLogic };
import { countingTrueCells } from "./countingAnswersCells";

function playerLogic() {
  const table = document.querySelector(".table-nonograms");

  table.addEventListener("click", leftClickLogic);
}

function leftClickLogic(event) {
  const leftClick = event.target;
  if (leftClick.classList.contains("table-nonograms__cell")) {
    event.target.classList.toggle("table-nonograms_player-point");
    checkWin();
  }
}

function checkWin() {
  const trueCellsCounting = countingTrueCells();
  const trueCellsGame = document.querySelectorAll(
    ".table-nonograms__cell.table-nonograms__cell_answer.table-nonograms_player-point"
  );

  console.log(trueCellsCounting, trueCellsGame.length);

  if (trueCellsCounting === trueCellsGame.length) {
    console.log("you win!");
  } else {
    console.log("not yet");
  }
}
