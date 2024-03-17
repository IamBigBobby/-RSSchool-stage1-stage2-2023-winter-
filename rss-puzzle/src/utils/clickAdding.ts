import { checkSentence } from './checkSentence';

export function addClickmovementPuzzle(textArr: string[][]): void {
  const puzzleContainer = document.querySelector('.puzzle-container');
  const collectingContainer = document.querySelector('.collecting-container');

  puzzleContainer.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('puzzle-piece')) {
      const collectingFields: NodeListOf<HTMLElement> =
        document.querySelectorAll('.collecting-field_active');

      for (let i = collectingFields.length - 1; i >= 0; i--) {
        const block = collectingFields[i];

        if (!block.querySelector('.puzzle-piece')) {
          target.parentNode.removeChild(target);
          block.appendChild(target);
        }
      }
      checkSentence(textArr);
    }
  });

  collectingContainer.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const rowContainer = document.querySelector('.row-container_active');

    if (target.classList.contains('puzzle-piece')) {
      target.parentNode.removeChild(target);
      rowContainer.appendChild(target);
    }
    checkSentence(textArr);
  });
}
