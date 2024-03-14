export function addClickmovementPuzzle(): void {
  const puzzleCards: NodeListOf<HTMLElement> =
    document.querySelectorAll('.puzzle-piece');
  const collectingFields: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.collecting-field_active'
  );

  puzzleCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      const puzzlePiece = event.target as HTMLElement;

      for (let i = collectingFields.length - 1; i >= 0; i--) {
        const block = collectingFields[i];

        console.log(block);
        if (!block.querySelector('.puzzle-piece')) {
          puzzlePiece.parentNode.removeChild(puzzlePiece);
          block.appendChild(puzzlePiece);
        }
      }
    });
  });
}
