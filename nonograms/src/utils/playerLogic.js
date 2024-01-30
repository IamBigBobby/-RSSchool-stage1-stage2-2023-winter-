export { playerLogic };
import { countingTrueCells } from "./countingAnswersCells";

function playerLogic() {
  const table = document.querySelector(".table-nonograms");

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
  table.addEventListener("mousedown", clickLogic);
}

function clickLogic(event) {
  const click = event.target;
  const mouseButton = event.button;

  if (mouseButton === 0) {
    if (click.classList.contains("table-nonograms__cell")) {
      click.classList.toggle("table-nonograms_player-point");
      checkWin();
    }
  }

  if (mouseButton === 2) {
    event.preventDefault();
    console.log("right click");
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
