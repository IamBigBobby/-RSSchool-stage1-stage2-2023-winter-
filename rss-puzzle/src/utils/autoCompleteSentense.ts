import { checkSentence, round } from './checkSentence';

export function autocompleteSentense(textArr: string[][]): void {
  const autoCompleteButton = document.querySelector('.auto-complete');
  autoCompleteButton.addEventListener('click', function () {
    const trueSentense = textArr[round];
    const rowContainerActive = document.querySelector('.row-container_active');
    const children = rowContainerActive.querySelectorAll('.puzzle-piece');
    const collectingFields = document.querySelectorAll(
      '.collecting-field_active'
    );
    for (let i = 0; i < trueSentense.length; i += 1) {
      children.forEach((child) => {
        if (trueSentense[i] === child.textContent) {
          for (let j = 0; j < collectingFields.length; j += 1) {
            const blockFiled = collectingFields[i];
            if (!blockFiled.querySelector('.puzzle-piece')) {
              blockFiled.appendChild(child);
            }
          }
        }
      });
    }
    checkSentence(textArr);
  });
}
