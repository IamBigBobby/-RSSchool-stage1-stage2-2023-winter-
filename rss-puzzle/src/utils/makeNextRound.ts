import { createRound } from './createRound';
import { currentDifficulty } from './difficulty';
import { currentRound, makeNextRoundStep } from './rounds';

export function makeNextRound(): void {
  const nextRoundButton = document.querySelector('.next-round-button');

  nextRoundButton.addEventListener('click', () => {
    console.log('click');
    const main = document.querySelector('.main');
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    makeNextRoundStep();
    createRound(currentDifficulty, currentRound);

    const listRound = document.querySelector(
      '.select-round',
    ) as HTMLSelectElement;
    const listRoundOptions = listRound.options;

    for (let i = 0; i < listRoundOptions.length; i++) {
      const round = listRoundOptions[i];
      if (i === currentRound) {
        round.selected = true;
      } else {
        round.selected = false;
      }
    }
  });
}
