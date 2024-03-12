import { div } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const gameField = div('game-container');

  const mainElement = document.querySelector('main');

  mainElement.appendChild(gameField.getNode());
}
