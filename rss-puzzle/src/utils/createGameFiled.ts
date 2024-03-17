import { div, main } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const puzzleContainer = div('puzzle-container');
  const fieldCollectingContainer = div('collecting-container');
  const mainElement = document.querySelector('main');
  const checkButton = document.createElement('button');
  const continueButton = document.createElement('button');

  checkButton.classList.add('check-button');
  checkButton.disabled = true;
  continueButton.classList.add('continue-button');
  continueButton.style.display = 'none';
  continueButton.disabled = true;

  checkButton.textContent = 'check';
  continueButton.textContent = 'continue';

  mainElement.appendChild(fieldCollectingContainer.getNode());
  mainElement.appendChild(checkButton);
  mainElement.appendChild(continueButton);
  mainElement.appendChild(puzzleContainer.getNode());
}
