import showRoundInfo from './showRoundInfo';

export default function destroyRound(): void {
  const infoBlock = document.createElement('div');
  infoBlock.classList.add('info-after-round');

  const main = document.querySelector('.main');
  if (main) {
    main.prepend(infoBlock);
    showRoundInfo();
  }
}
