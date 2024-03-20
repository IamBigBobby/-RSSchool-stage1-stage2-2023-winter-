import createRound from './createRound';
import { currentDifficulty } from './difficulty';

export let currentRound: number = 0;
export let selectedIndex: number;

function changeRound(event: Event): void {
  const { selectedIndex: targetSelectedIndex } =
    event.target as HTMLSelectElement;

  currentRound = targetSelectedIndex;

  const mainElement = document.querySelector('main');

  if (mainElement) {
    while (mainElement.firstChild) {
      mainElement.removeChild(mainElement.firstChild);
    }

    createRound(currentDifficulty, currentRound);
  }
}

export default function setRounds(value: number): void {
  const selectRound = document.querySelector(
    '.select-round',
  ) as HTMLSelectElement;

  selectedIndex = selectRound.selectedIndex;

  while (selectRound.firstChild) {
    selectRound.removeChild(selectRound.firstChild);
  }

  for (let i = 0; i < value; i += 1) {
    const round = document.createElement('option');
    round.textContent = `Round ${i + 1}`;

    if (i === selectedIndex) {
      round.setAttribute('selected', 'selected');
    }

    selectRound.appendChild(round);
  }

  selectRound.addEventListener('change', changeRound);
}

export function makeNextRoundStep(): void {
  currentRound += 1;
}
