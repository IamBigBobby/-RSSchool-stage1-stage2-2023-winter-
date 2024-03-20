import { GetCurrentData } from './getData';
import setRounds from './rounds';

export let currentDifficulty: number = 1;

function changeDifficulty(event: Event): void {
  const { selectedIndex } = event.target as HTMLSelectElement;

  currentDifficulty = selectedIndex + 1;

  const newData = new GetCurrentData(currentDifficulty);

  Promise.all([newData.getRoundsCount()]).then(([roundsCount]) => {
    setRounds(roundsCount);
  });
}

export default function setDifficulty(): void {
  const selectLevel = document.querySelector('.selector-lvl');

  if (selectLevel instanceof HTMLSelectElement) {
    const levels = [
      'Difficulty 1',
      'Difficulty 2',
      'Difficulty 3',
      'Difficulty 4',
      'Difficulty 5',
      'Difficulty 6',
    ];

    for (let i = 0; i < levels.length; i += 1) {
      const level = document.createElement('option');
      level.textContent = levels[i];
      selectLevel.appendChild(level);
    }

    selectLevel.addEventListener('change', changeDifficulty);
  }
}
