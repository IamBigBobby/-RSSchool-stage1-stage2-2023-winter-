import checkSentence, { step } from './checkSentence';

export default function autocompleteSentence(textArr: string[][]): void {
  const autoCompleteButton = document.querySelector('.auto-complete');

  if (autoCompleteButton) {
    autoCompleteButton.addEventListener('click', () => {
      const activeFields = document.querySelectorAll(
        '.collecting-field_active',
      );
      const rowActive = document.querySelector('.row-container_active');

      if (rowActive) {
        activeFields.forEach((field) => {
          if (field.querySelector('.puzzle-piece')) {
            const dragPuzzle = field.querySelector('.puzzle-piece');
            if (dragPuzzle) {
              rowActive.appendChild(dragPuzzle);
            }
          }
        });
      }

      const trueSentence = textArr[step];
      const rowContainerActive = document.querySelector(
        '.row-container_active',
      );
      const children = rowContainerActive?.querySelectorAll('.puzzle-piece');
      const collectingFields = document.querySelectorAll(
        '.collecting-field_active',
      );

      children?.forEach((child) => {
        trueSentence.forEach((word, index) => {
          if (word === child.textContent) {
            const blockField = collectingFields[index];
            blockField.appendChild(child.cloneNode(true));
            while (blockField.children.length > 1) {
              if (blockField.firstChild && blockField.parentNode) {
                blockField.removeChild(blockField.firstChild);
              }
            }
          }
        });
      });

      const rowContainerActiveChildren = Array.from(
        rowContainerActive?.children || [],
      );
      rowContainerActiveChildren.forEach((child) => {
        if (child.parentNode) {
          child.parentNode.removeChild(child);
        }
      });

      const translationField = document.querySelector('.translation-field');
      if (translationField) {
        translationField.textContent = '';
      }
      const translationButtonHint = document.querySelector(
        '.button-hint-translation',
      );
      const imgButtonHint = document.querySelector('.button-hint-img');
      if (translationButtonHint) {
        translationButtonHint.textContent = 'Show translate: off';
      }
      if (imgButtonHint) {
        imgButtonHint.textContent = 'Show background: off';
      }

      checkSentence(textArr);
    });
  }
}
