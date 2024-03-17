export function setDifficulty(): void {
  const selectLevel = document.querySelector('.selector-lvl');
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
}
