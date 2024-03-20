import checkSentence from './checkSentence';

export default function dragAndDropMovementPuzzle(textArr: string[][]): void {
  const puzzlePieces = document.querySelectorAll('.puzzle-piece');

  let draggedElement: HTMLElement | null = null;

  function dragStart(event: DragEvent): void {
    draggedElement = event.currentTarget as HTMLElement;
  }

  function dragOver(event: DragEvent): void {
    event.preventDefault();
  }

  function dragDrop(event: DragEvent): void {
    event.preventDefault();
    if (draggedElement) {
      const dropField = event.target as HTMLElement;

      if (dropField.classList.contains('puzzle-piece')) {
        const dragStartParent = draggedElement.parentNode as Node;

        if (dragStartParent === dropField.parentNode) {
          return;
        }

        draggedElement.parentNode?.removeChild(draggedElement);
        dropField.parentNode?.appendChild(draggedElement);
        dropField.parentNode?.removeChild(dropField);
        dragStartParent.appendChild(dropField);
      } else if (dropField.classList.contains('word')) {
        const dragStartParent = draggedElement.parentNode as Node;

        const parentDropFile = dropField.parentNode as Node;
        const grandparentDropFile = parentDropFile.parentNode as Node;

        draggedElement.parentNode?.removeChild(draggedElement);
        grandparentDropFile.appendChild(draggedElement);
        grandparentDropFile.removeChild(parentDropFile);
        dragStartParent.appendChild(parentDropFile);
      } else if (dropField.classList.contains('collecting-field_active')) {
        draggedElement.parentNode?.removeChild(draggedElement);
        dropField.appendChild(draggedElement);
        checkSentence(textArr);
      }
    }
  }

  puzzlePieces.forEach((puzzle) => {
    puzzle.setAttribute('draggable', 'true');
    puzzle.addEventListener('drag', (event: Event) =>
      dragStart(event as DragEvent),
    );
  });

  function updateEventListeners(): void {
    const activeFields = document.querySelectorAll('.collecting-field');
    activeFields.forEach((field) => {
      field.addEventListener('drop', (event: Event) =>
        dragDrop(event as DragEvent),
      );
      field.addEventListener('dragover', (event: Event) =>
        dragOver(event as DragEvent),
      );
    });
  }

  updateEventListeners();
}
