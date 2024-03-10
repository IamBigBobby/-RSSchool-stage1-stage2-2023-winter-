import { div, img } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const gameFiled = div('game-container');

  const mainElement = document.querySelector('main');

  console.log(mainElement);

  mainElement.appendChild(gameFiled.getNode());
}
