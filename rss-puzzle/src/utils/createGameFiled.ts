import { div, img } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const gameFiled = div(
    'game-container',
    img({
      src: 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/level1/9th_wave.jpg',
      alt: '#',
      className: 'game-container__puzzle',
    })
  );

  const mainElement = document.querySelector('main');

  console.log(mainElement);

  mainElement.appendChild(gameFiled.getNode());
}
