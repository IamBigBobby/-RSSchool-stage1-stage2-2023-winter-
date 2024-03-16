import { div, main } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const puzzleContainer = div('puzzle-container');
  const fieldCollectingContainer = div('collecting-container');
  const mainElement = document.querySelector('main');
  const button = document.createElement('button');
  button.classList.add('check-button');
  button.disabled = true;

  button.textContent = 'check';

  mainElement.appendChild(fieldCollectingContainer.getNode());
  mainElement.appendChild(button);
  mainElement.appendChild(puzzleContainer.getNode());
}
