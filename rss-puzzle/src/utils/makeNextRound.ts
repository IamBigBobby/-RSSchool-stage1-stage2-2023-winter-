import { createRound } from './createRound';
import { currentDifficulty } from './difficulty';
import { currentRound, makeNextRoundStep } from './rounds';

export function makeNextRound(): void {
  const nextRoundButton = document.querySelector('.next-round-button');

  nextRoundButton.addEventListener('click', function () {
    console.log('click');
    const main = document.querySelector('.main');
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    makeNextRoundStep();
    createRound(currentDifficulty, currentRound);
  });
}
