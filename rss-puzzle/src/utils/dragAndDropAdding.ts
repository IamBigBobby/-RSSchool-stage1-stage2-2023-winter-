import { checkSentence } from './checkSentence';

export function dragAndDropMovementPuzzle(textArr: string[][]): void {
  const puzzles = document.querySelectorAll('.puzzle-piece');
  const collectingFields = document.querySelectorAll(
    '.row-container-collecting_active'
  );

  let draggedPuzzle: HTMLElement;
  let touchStartPos: { x: number; y: number };

  collectingFields.forEach((field) => {
    field.addEventListener('dragover', (event: MouseEvent) => {
      event.preventDefault();
    });

    field.addEventListener('drop', (event: MouseEvent) => {
      event.preventDefault();
      const dropField = event.target as HTMLElement;

      if (dropField.classList.contains('puzzle-piece')) {
        const dragStart = draggedPuzzle.parentNode;

        if (dragStart === dropField.parentNode) {
          return;
        }

        draggedPuzzle.parentNode.removeChild(draggedPuzzle);
        dropField.parentNode.appendChild(draggedPuzzle);
        dropField.parentNode.removeChild(dropField);
        dragStart.appendChild(dropField);
      }

      if (dropField.classList.contains('collecting-field_active')) {
        draggedPuzzle.parentNode.removeChild(draggedPuzzle);
        dropField.appendChild(draggedPuzzle);
      }

      checkSentence(textArr);
    });
  });

  puzzles.forEach((puzzle) => {
    puzzle.setAttribute('draggable', 'true');

    puzzle.addEventListener('dragstart', (event: TouchEvent) => {
      draggedPuzzle = event.target as HTMLElement;
    });

    puzzle.addEventListener('touchstart', (event: TouchEvent) => {
      draggedPuzzle = event.target as HTMLElement;
      const touch = event.touches[0];
      touchStartPos = {
        x: touch.clientX,
        y: touch.clientY,
      };
    });

    puzzle.addEventListener('touchmove', (event: TouchEvent) => {
      event.preventDefault();
      const touch = event.touches[0];
      const offsetX = touch.clientX - touchStartPos.x;
      const offsetY = touch.clientY - touchStartPos.y;

      draggedPuzzle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    puzzle.addEventListener('touchend', (event: TouchEvent) => {
      event.preventDefault();
      draggedPuzzle.style.transform = 'translate(0, 0)';

      const dropField = document.elementFromPoint(
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
      ) as HTMLElement;

      if (dropField.classList.contains('puzzle-piece')) {
        const dragStart = draggedPuzzle.parentNode;

        if (dragStart === dropField.parentNode) {
          return;
        }

        draggedPuzzle.parentNode.removeChild(draggedPuzzle);
        dropField.parentNode.appendChild(draggedPuzzle);
        dropField.parentNode.removeChild(dropField);
        dragStart.appendChild(dropField);
      }

      if (dropField.classList.contains('collecting-field_active')) {
        draggedPuzzle.parentNode.removeChild(draggedPuzzle);
        dropField.appendChild(draggedPuzzle);
      }

      checkSentence(textArr);
    });
  });
}
