// eslint-disable-next-line import/extensions
import checkSentence from './checkSentence';

export default function addClickMovementPuzzle(textArr: string[][]): void {
  const puzzleContainer =
    document.querySelector<HTMLElement>('.puzzle-container');
  const collectingContainer = document.querySelector<HTMLElement>(
    '.collecting-container',
  );

  puzzleContainer?.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const puzzlePiece = target.closest<HTMLElement>('.puzzle-piece');
    if (puzzlePiece) {
      const collectingFields = document.querySelectorAll<HTMLElement>(
        '.collecting-field_active',
      );

      for (let i = collectingFields.length - 1; i >= 0; i -= 1) {
        const block = collectingFields[i];

        if (!block.querySelector('.puzzle-piece')) {
          puzzlePiece.parentNode?.removeChild(puzzlePiece);
          block.appendChild(puzzlePiece);
        }
      }
      checkSentence(textArr);
    }
  });

  collectingContainer?.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const rowContainer = document.querySelector<HTMLElement>(
      '.row-container_active',
    );

    const puzzlePiece = target.closest<HTMLElement>('.puzzle-piece');
    if (puzzlePiece) {
      puzzlePiece.parentNode?.removeChild(puzzlePiece);
      rowContainer?.appendChild(puzzlePiece);
      checkSentence(textArr);
    }
  });
}
