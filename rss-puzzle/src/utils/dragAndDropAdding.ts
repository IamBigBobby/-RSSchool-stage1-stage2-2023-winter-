import { checkSentence } from './checkSentence';

export function dragAndDropMovementPuzzle(textArr: string[][]): void {
  const puzzlePieces = document.querySelectorAll('.puzzle-piece');

  puzzlePieces.forEach((puzzle) => {
    puzzle.setAttribute('draggable', 'true');
    puzzle.addEventListener('drag', dragStart);
  });

  updateEventListeners();

  function updateEventListeners() {
    const activeField = document.querySelectorAll('.collecting-field');
    activeField.forEach((filed) => {
      filed.addEventListener('drop', dragDrop);
      filed.addEventListener('dragover', dragOver);
    });
  }

  let draggedElement: HTMLElement;

  function dragStart(event: DragEvent): void {
    draggedElement = event.target as HTMLElement;
  }

  function dragOver(event: DragEvent): void {
    event.preventDefault();
  }

  function dragDrop(event: DragEvent): void {
    event.preventDefault();
    if (draggedElement) {
      const dropField = event.target as HTMLElement;

      if (dropField.classList.contains('puzzle-piece')) {
        const dragStart = draggedElement.parentNode;

        if (dragStart === dropField.parentNode) {
          return;
        }

        draggedElement.parentNode.removeChild(draggedElement);
        dropField.parentNode.appendChild(draggedElement);
        dropField.parentNode.removeChild(dropField);
        dragStart.appendChild(dropField);
      } else if (dropField.classList.contains('collecting-field_active')) {
        draggedElement.parentNode.removeChild(draggedElement);
        dropField.appendChild(draggedElement);
        checkSentence(textArr);
      }
    }
  }
}
