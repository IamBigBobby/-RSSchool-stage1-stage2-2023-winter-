// eslint-disable-next-line import/extensions
import createRound from './createRound';
import { currentDifficulty } from './difficulty';
import { currentRound, makeNextRoundStep } from './rounds';

export default function makeNextRound(): void {
  const nextRoundButton: HTMLButtonElement | null =
    document.querySelector('.next-round-button');

  if (nextRoundButton) {
    nextRoundButton.addEventListener('click', () => {
      const main: HTMLElement | null = document.querySelector('.main');

      if (main) {
        while (main.firstChild) {
          main.removeChild(main.firstChild);
        }

        makeNextRoundStep();
        createRound(currentDifficulty, currentRound);

        const listRound = document.querySelector(
          '.select-round',
        ) as HTMLSelectElement;
        const listRoundOptions = listRound.options;

        for (let i = 0; i < listRoundOptions.length; i += 1) {
          const round = listRoundOptions[i];
          if (i === currentRound) {
            round.selected = true;
          } else {
            round.selected = false;
          }
        }
      }
    });
  }
}
