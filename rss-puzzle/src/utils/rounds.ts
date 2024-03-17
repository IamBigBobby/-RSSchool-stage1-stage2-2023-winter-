import { createRound } from './createRound';
import { currentDifficulty } from './difficulty';

export let currentRound: number = 0;

export function setRounds(value: number): void {
  const selectRound = document.querySelector('.select-round');

  while (selectRound.firstChild) {
    selectRound.removeChild(selectRound.firstChild);
  }

  for (let i = 0; i < value; i += 1) {
    const round = document.createElement('option');
    round.textContent = `Round ${i + 1}`;
    selectRound.appendChild(round);
  }

  selectRound.addEventListener('change', changeRound);
}

function changeRound(event: MouseEvent): void {
  const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;

  currentRound = selectedIndex;

  console.log(currentRound);

  const mainElement = document.querySelector('main');

  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }

  createRound(currentDifficulty, currentRound);
}
