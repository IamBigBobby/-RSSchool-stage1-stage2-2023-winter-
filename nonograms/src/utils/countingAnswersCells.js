export { countingTrueCells };
function countingTrueCells() {
  const gameCells = document.querySelectorAll(".table-nonograms__cell");
  let countTrueCells = 0;
  gameCells.forEach((cell) => {
    if (cell.classList.contains("table-nonograms__cell_answer")) {
      countTrueCells++;
    }
  });
  return countTrueCells;
}
