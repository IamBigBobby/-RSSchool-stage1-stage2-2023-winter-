import { checkSentence } from './checkSentence';

export function addClickmovementPuzzle(textArr: string[][]): void {
  const puzzleContainer = document.querySelector('.puzzle-container');
  const collectingContainer = document.querySelector('.collecting-container');

  puzzleContainer.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const puzzlePiece = target.closest('.puzzle-piece');
    if (puzzlePiece) {
      const collectingFields: NodeListOf<HTMLElement> =
        document.querySelectorAll('.collecting-field_active');

      for (let i = collectingFields.length - 1; i >= 0; i--) {
        const block = collectingFields[i];

        if (!block.querySelector('.puzzle-piece')) {
          puzzlePiece.parentNode.removeChild(puzzlePiece);
          block.appendChild(puzzlePiece);
        }
      }
      checkSentence(textArr);
    }
  });

  collectingContainer.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const rowContainer = document.querySelector('.row-container_active');

    const puzzlePiece = target.closest('.puzzle-piece');
    if (puzzlePiece) {
      puzzlePiece.parentNode.removeChild(puzzlePiece);
      rowContainer.appendChild(puzzlePiece);
      checkSentence(textArr);
    }
  });
}
