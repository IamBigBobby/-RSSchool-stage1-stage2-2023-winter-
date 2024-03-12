import { div } from '../componets/tagsFarm';

export function createGameFiled(img: string): void {
  const gameField = div('game-container');
  gameField.setBackgroundImage(
    `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${img}`
  );

  const mainElement = document.querySelector('main');

  console.log(mainElement);

  mainElement.appendChild(gameField.getNode());
}
