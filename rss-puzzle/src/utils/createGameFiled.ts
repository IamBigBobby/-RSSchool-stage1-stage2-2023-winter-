// eslint-disable-next-line import/extensions
import { div } from '../componets/tagsFarm';

export default function createGameField(): void {
  const puzzleContainer = div('puzzle-container');
  const fieldCollectingContainer = div('collecting-container');
  const mainElement: HTMLElement | null = document.querySelector('main');
  const checkButton = document.createElement('button');
  const continueButton = document.createElement('button');
  const buttonAutoComplete = document.createElement('button');
  const translationField = document.createElement('div');
  const buttonContainer = document.createElement('div');

  if (mainElement) {
    checkButton.classList.add('check-button');
    checkButton.disabled = true;
    continueButton.classList.add('continue-button');
    continueButton.style.display = 'none';
    continueButton.disabled = true;
    buttonAutoComplete.classList.add('auto-complete');
    translationField.classList.add('translation-field');
    buttonContainer.classList.add('button-container');

    checkButton.textContent = 'check';
    continueButton.textContent = 'continue';
    buttonAutoComplete.textContent = 'auto-complete';

    mainElement.appendChild(translationField);
    mainElement.appendChild(fieldCollectingContainer.getNode());
    mainElement.appendChild(buttonContainer);
    mainElement.appendChild(puzzleContainer.getNode());

    buttonContainer.appendChild(continueButton);
    buttonContainer.appendChild(checkButton);
    buttonContainer.appendChild(buttonAutoComplete);
  }
}
