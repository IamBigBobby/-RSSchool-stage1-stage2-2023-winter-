import { div, main } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const puzzleContainer = div('puzzle-container');
  const fieldCollectingContainer = div('collecting-container');
  const mainElement = document.querySelector('main');
  const checkButton = document.createElement('button');
  const continueButton = document.createElement('button');
  const buttonAutoComplete = document.createElement('button');
  const translationFeild = document.createElement('div');
  const buttonContainer = document.createElement('div');

  checkButton.classList.add('check-button');
  checkButton.disabled = true;
  continueButton.classList.add('continue-button');
  continueButton.style.display = 'none';
  continueButton.disabled = true;
  buttonAutoComplete.classList.add('auto-complete');
  translationFeild.classList.add('translation-field');
  buttonContainer.classList.add('button-container');

  checkButton.textContent = 'check';
  continueButton.textContent = 'continue';
  buttonAutoComplete.textContent = 'auto-complete';

  mainElement.appendChild(translationFeild);
  mainElement.appendChild(fieldCollectingContainer.getNode());
  mainElement.appendChild(buttonContainer);
  // mainElement.appendChild(checkButton);
  // mainElement.appendChild(continueButton);
  // mainElement.appendChild(buttonAutoComplete);
  mainElement.appendChild(puzzleContainer.getNode());

  buttonContainer.appendChild(continueButton);
  buttonContainer.appendChild(checkButton);
  buttonContainer.appendChild(buttonAutoComplete);
}
