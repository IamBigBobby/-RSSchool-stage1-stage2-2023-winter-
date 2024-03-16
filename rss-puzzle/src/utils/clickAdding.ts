import { checkSentence } from './checkSentence';

export function addClickmovementPuzzle(textArr: string[][]): void {
  const puzzleCards: NodeListOf<HTMLElement> =
    document.querySelectorAll('.puzzle-piece');
  const collectingFields: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.collecting-field_active'
  );
  const rowContainer = document.querySelector('.row-container') as HTMLElement;

  puzzleCards.forEach((card) => {
    card.addEventListener('click', (event: MouseEvent) => {
      const puzzlePiece = event.target as HTMLElement;
      const parent = puzzlePiece.parentNode as HTMLElement;

      if (parent.classList.contains('collecting-field')) {
        parent.removeChild(puzzlePiece);
        rowContainer.appendChild(puzzlePiece);
        checkSentence(textArr);
        return;
      }

      for (let i = collectingFields.length - 1; i >= 0; i--) {
        const block = collectingFields[i];

        if (!block.querySelector('.puzzle-piece')) {
          puzzlePiece.parentNode.removeChild(puzzlePiece);
          block.appendChild(puzzlePiece);
        }
      }
      checkSentence(textArr);
    });
  });
}
