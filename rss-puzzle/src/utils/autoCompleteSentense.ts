import { round } from './checkSentence';

export function autocompleteSentense(textArr: string[][]): void {
  const autoCompleteButton = document.querySelector('.auto-complete');
  autoCompleteButton.addEventListener('click', function () {
    console.log(textArr[round]);
    const rowContainerActive = document.querySelector('.row-container_active');
    const children = rowContainerActive.querySelectorAll('.puzzle-piece');
    console.log(children);
  });
}
