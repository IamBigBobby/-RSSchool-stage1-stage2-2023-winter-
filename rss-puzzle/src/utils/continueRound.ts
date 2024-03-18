import { nextStep, step } from './checkSentence';

export function continueRound(): void {
  const continueButton = document.querySelector(
    '.continue-button'
  ) as HTMLButtonElement;
  const checkButton = document.querySelector(
    '.check-button'
  ) as HTMLButtonElement;
  const currentFieldLine = document.querySelector(
    '.row-container-collecting_active'
  );
  const activeFields = document.querySelectorAll('.collecting-field_active');
  const completeRightPuzzles =
    currentFieldLine.querySelectorAll('.puzzle-piece');

  currentFieldLine.classList.remove('row-container-collecting_active_complete');

  completeRightPuzzles.forEach((puzzle) => {
    puzzle.classList.add('puzzle_disable');
  });

  activeFields.forEach((field) => {
    field.classList.remove('collecting-field_active');
  });

  const nextFieldLine = currentFieldLine.nextSibling as HTMLElement;

  console.log(nextFieldLine);

  if (nextFieldLine === null) {
    console.log('win');
    return;
  }

  currentFieldLine.classList.remove('row-container-collecting_active');

  nextFieldLine.classList.add('row-container-collecting_active');

  const nextFields = Array.from(nextFieldLine.children) as HTMLElement[];

  nextFields.forEach((field) => {
    field.classList.add('collecting-field_active');
  });

  nextStep();

  continueButton.disabled = true;
  continueButton.style.display = 'none';
  checkButton.style.display = 'block';

  const translationField = document.querySelector('.translation-field');
  translationField.textContent = '';
  const translationButtonHint = document.querySelector(
    '.button-hint-translation'
  );
  translationButtonHint.textContent = 'Show translate: off';

  nextPuzzle(step);
}

function nextPuzzle(step: number): void {
  const puzzleRow = document.querySelectorAll(
    '.row-container'
  ) as NodeListOf<HTMLElement>;

  const currentRowContainer = document.querySelector('.row-container_active');
  const nextRowContainer = currentRowContainer.nextElementSibling;

  currentRowContainer.classList.remove('row-container_active');
  nextRowContainer.classList.add('row-container_active');

  puzzleRow.forEach((puzzle, index) => {
    if (index === step) {
      puzzle.style.display = 'flex';
    } else {
      puzzle.style.display = 'none';
    }
  });
}
