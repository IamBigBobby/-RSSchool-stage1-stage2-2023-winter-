export function dragAndDropMovementPuzzle(): void {
  const puzzles = document.querySelectorAll('.puzzle-piece');
  const collectingFields = document.querySelectorAll(
    '.row-container-collecting_active'
  );

  let draggedPuzzle: HTMLElement;

  collectingFields.forEach((field) => {
    field.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    field.addEventListener('drop', (event) => {
      event.preventDefault();
      const dropField = event.target as HTMLElement;

      if (dropField.classList.contains('puzzle-piece')) {
        const dragStart = draggedPuzzle.parentNode;

        draggedPuzzle.parentNode.removeChild(draggedPuzzle);

        dropField.parentNode.appendChild(draggedPuzzle);

        dropField.parentNode.removeChild(dropField);

        dragStart.appendChild(dropField);
      }

      if (dropField.classList.contains('collecting-field_active')) {
        draggedPuzzle.parentNode.removeChild(draggedPuzzle);
        dropField.appendChild(draggedPuzzle);
      }
    });
  });

  puzzles.forEach((puzzle) => {
    puzzle.setAttribute('draggable', 'true');

    puzzle.addEventListener('dragstart', (event) => {
      draggedPuzzle = event.target as HTMLElement;
    });
  });
}
