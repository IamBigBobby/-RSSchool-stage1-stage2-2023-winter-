import { startNewGame } from "./startNewGame";
import { stopTimer } from "./timer";

export { openAnswer };

function openAnswer(event) {
  const status = event.target.textContent;
  const trueCells = document.querySelectorAll(".table-nonograms__cell_answer");

  if (status === "help mode: off") {
    stopTimer();

    trueCells.forEach((cell) => {
      cell.classList.add("table-nonograms__cell_answer_visible");
    });

    event.target.innerHTML = "help mode: on";
  } else {
    trueCells.forEach((cell) => {
      cell.classList.remove("table-nonograms__cell_answer_visible");
    });
    event.target.innerHTML = "help mode: off";

    startNewGame();
  }
}
