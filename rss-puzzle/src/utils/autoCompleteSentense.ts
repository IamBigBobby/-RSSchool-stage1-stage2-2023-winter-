import { checkSentence, step } from './checkSentence';

export function autocompleteSentense(textArr: string[][]): void {
  const autoCompleteButton = document.querySelector('.auto-complete');
  autoCompleteButton.addEventListener('click', function () {
    const activeFields = document.querySelectorAll('.collecting-field_active');
    const rowActive = document.querySelector('.row-container_active');
    activeFields.forEach((field) => {
      if (field.querySelector('.puzzle-piece')) {
        const dragPuzzle = field.querySelector('.puzzle-piece');
        rowActive.appendChild(dragPuzzle);
      }
    });

    const trueSentence = textArr[step];
    const rowContainerActive = document.querySelector('.row-container_active');
    const children = rowContainerActive.querySelectorAll('.puzzle-piece');
    const collectingFields = document.querySelectorAll(
      '.collecting-field_active'
    );
    children.forEach((child) => {
      trueSentence.forEach((word, index) => {
        if (word === child.textContent) {
          const blockField = collectingFields[index];
          blockField.appendChild(child.cloneNode(true));
          while (blockField.children.length > 1) {
            blockField.removeChild(blockField.lastChild);
          }
        }
      });
    });
    const rowContainerActiveChildren = Array.from(rowContainerActive.children);

    rowContainerActiveChildren.forEach((child) => {
      child.parentNode.removeChild(child);
    });

    const translationField = document.querySelector('.translation-field');
    translationField.textContent = '';
    const translationButtonHint = document.querySelector(
      '.button-hint-translation'
    );
    translationButtonHint.textContent = 'Show translate: off';

    checkSentence(textArr);
  });
}
