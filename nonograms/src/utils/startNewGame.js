import { stopTimer } from "./timer";

export { startNewGame };

function startNewGame() {
  const tableCells = document.querySelectorAll(".table-nonograms__cell");

  tableCells.forEach((cell) => {
    if (cell.classList.contains("table-nonograms_player-point")) {
      cell.classList.remove("table-nonograms_player-point");
    }

    if (cell.classList.contains("table-nonograms_player-cross")) {
      cell.classList.remove("table-nonograms_player-cross");
    }
  });
  stopTimer();
}
