import { clickLogic } from "./playerLogic";
import { startNewGame } from "./startNewGame";
import { stopTimer } from "./timer";

export { openAnswer };

function openAnswer(event) {
  const button = event.target;
  const status = event.target.textContent;
  const trueCells = document.querySelectorAll(".table-nonograms__cell_answer");
  const table = document.querySelector(".table-nonograms");

  if (status === "solution: off") {
    stopTimer();

    trueCells.forEach((cell) => {
      cell.classList.add("table-nonograms__cell_answer_visible");
    });

    table.removeEventListener("mousedown", clickLogic);

    event.target.innerHTML = "solution: on";

    button.style.backgroundColor = "aqua";
  } else {
    trueCells.forEach((cell) => {
      cell.classList.remove("table-nonograms__cell_answer_visible");
    });
    event.target.innerHTML = "solution: off";

    button.style.backgroundColor = "white";

    startNewGame();
    table.addEventListener("mousedown", clickLogic);
  }
}
