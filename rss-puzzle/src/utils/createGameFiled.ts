import { div } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const puzzleContainer = div('puzzle-container');
  const fieldCollectingContainer = div('collecting-container');
  const mainElement = document.querySelector('main');
  const bodyElement = document.body;
  const checkButton = document.createElement('button');
  const continueButton = document.createElement('button');
  const buttonAutoComplete = document.createElement('button');

  checkButton.classList.add('check-button');
  checkButton.disabled = true;
  continueButton.classList.add('continue-button');
  continueButton.style.display = 'none';
  continueButton.disabled = true;
  buttonAutoComplete.classList.add('auto-complete');

  checkButton.textContent = 'check';
  continueButton.textContent = 'continue';
  buttonAutoComplete.textContent = 'auto-complete';

  mainElement.appendChild(fieldCollectingContainer.getNode());
  mainElement.appendChild(checkButton);
  mainElement.appendChild(continueButton);
  mainElement.appendChild(buttonAutoComplete);
  mainElement.appendChild(puzzleContainer.getNode());
}
