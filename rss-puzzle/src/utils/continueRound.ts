import { nextStep, step } from './checkSentence';
import destroyRound from './destroyRound';
import nextPuzzle from './makeNextPuzzle';

export default function continueRound(): void {
  const continueButton = document.querySelector(
    '.continue-button',
  ) as HTMLButtonElement;
  const checkButton = document.querySelector(
    '.check-button',
  ) as HTMLButtonElement;
  let currentFieldLine = document.querySelector(
    '.row-container-collecting_active',
  );

  if (!currentFieldLine) {
    destroyRound();
    return;
  }

  currentFieldLine = currentFieldLine as HTMLElement;

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

  if (nextFieldLine === null) {
    destroyRound();
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
  if (translationField) {
    translationField.textContent = '';
  }
  const translationButtonHint = document.querySelector(
    '.button-hint-translation',
  );
  if (translationButtonHint) {
    translationButtonHint.textContent = 'Show translate: off';
  }
  const imgButtonHint = document.querySelector('.button-hint-img');
  if (imgButtonHint) {
    imgButtonHint.textContent = 'Show background: off';
  }

  nextPuzzle(step);
}
