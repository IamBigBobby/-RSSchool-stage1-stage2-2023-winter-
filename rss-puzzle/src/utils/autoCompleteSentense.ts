import { checkSentence, round } from './checkSentence';

export function autocompleteSentense(textArr: string[][]): void {
  const autoCompleteButton = document.querySelector('.auto-complete');
  autoCompleteButton.addEventListener('click', function () {
    const trueSentence = textArr[round];
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
    checkSentence(textArr);
  });
}
