import { div } from '../componets/tagsFarm';

export function createGameFiled(): void {
  const puzzleContainer = div('puzzle-container');
  const fieldCollectingContainer = div('collecting-container');
  const mainElement = document.querySelector('main');
  const checkButton = document.createElement('button');
  const continueButton = document.createElement('button');
  const buttonAutoComplete = document.createElement('button');
  const selectLevel = document.createElement('select');
  const selectRound = document.createElement('select');

  checkButton.classList.add('check-button');
  checkButton.disabled = true;
  continueButton.classList.add('continue-button');
  continueButton.style.display = 'none';
  continueButton.disabled = true;
  buttonAutoComplete.classList.add('auto-complete');
  selectLevel.classList.add('selector-lvl');
  selectRound.classList.add('select-round');

  const rounds = ['Round 1', 'Round 2', 'Round 3'];

  for (let i = 0; i < rounds.length; i += 1) {
    const round = document.createElement('option');
    round.textContent = rounds[i];
    selectRound.add(round);
  }

  checkButton.textContent = 'check';
  continueButton.textContent = 'continue';
  buttonAutoComplete.textContent = 'auto-complete';

  mainElement.appendChild(selectLevel);
  mainElement.appendChild(selectRound);
  mainElement.appendChild(fieldCollectingContainer.getNode());
  mainElement.appendChild(checkButton);
  mainElement.appendChild(continueButton);
  mainElement.appendChild(buttonAutoComplete);
  mainElement.appendChild(puzzleContainer.getNode());
}
