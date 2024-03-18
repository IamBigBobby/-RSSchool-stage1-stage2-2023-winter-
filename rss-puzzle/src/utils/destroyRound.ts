export function destroyRound(): void {
  const infoBlock = document.createElement('div');
  infoBlock.classList.add('info-after-round');

  const main = document.querySelector('.main');
  main.prepend(infoBlock);
}
