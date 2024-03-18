import { div } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const puzzleContainer = div('puzzle-container');
  const fieldCollectingContainer = div('collecting-container');
  const mainElement = document.querySelector('main');
  const checkButton = document.createElement('button');
  const continueButton = document.createElement('button');
  const buttonAutoComplete = document.createElement('button');
  const translationFeild = document.createElement('div');

  checkButton.classList.add('check-button');
  checkButton.disabled = true;
  continueButton.classList.add('continue-button');
  continueButton.style.display = 'none';
  continueButton.disabled = true;
  buttonAutoComplete.classList.add('auto-complete');
  translationFeild.classList.add('translation-field');

  checkButton.textContent = 'check';
  continueButton.textContent = 'continue';
  buttonAutoComplete.textContent = 'auto-complete';

  mainElement.appendChild(translationFeild);
  mainElement.appendChild(fieldCollectingContainer.getNode());
  mainElement.appendChild(checkButton);
  mainElement.appendChild(continueButton);
  mainElement.appendChild(buttonAutoComplete);
  mainElement.appendChild(puzzleContainer.getNode());
}
