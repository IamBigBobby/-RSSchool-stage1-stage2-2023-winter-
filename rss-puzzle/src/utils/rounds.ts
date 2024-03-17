export function setRounds(value: number): void {
  const selectRound = document.querySelector('.select-round');
  console.log(value);
  console.log(selectRound);

  for (let i = 0; i < value; i += 1) {
    const round = document.createElement('option');
    round.textContent = `Round ${i + 1}`;
    selectRound.appendChild(round);
  }
}
