export function dragAndDropMovementPuzzle(): void {
  const puzzles = document.querySelectorAll('.puzzle-piece');

  console.log(puzzles);
  puzzles.forEach((puzzle) => {
    puzzle.setAttribute('draggable', 'true');

    puzzle.addEventListener('dragstart', (event) => console.log(event));
  });
}
