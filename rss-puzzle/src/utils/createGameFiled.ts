import { div } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const puzzleContainer = div('puzzle-container');
  const fieldCollectingContainer = div('collecting-container');

  const mainElement = document.querySelector('main');

  mainElement.appendChild(fieldCollectingContainer.getNode());
  mainElement.appendChild(puzzleContainer.getNode());
}
