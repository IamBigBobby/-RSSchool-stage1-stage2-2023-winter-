import { div } from '../componets/tagsFarm';

export function createGameFiled(img: string): void {
  const gameField = div('game-container');
  gameField.setBackgroundImage(img);

  const mainElement = document.querySelector('main');

  console.log(mainElement);

  mainElement.appendChild(gameField.getNode());
}
