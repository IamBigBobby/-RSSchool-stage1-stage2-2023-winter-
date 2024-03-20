import autocompleteSentence from './autoCompleteSentense';
import { setStep } from './checkSentence';
import addClickMovementPuzzle from './clickAdding';
import CollectingField from './createCollectingField';
import createGameField from './createGameFiled';
import PuzzleGame from './createPuzzle';
import dragAndDropMovementPuzzle from './dragAndDropAdding';
import { GetCurrentData } from './getData';
import setRounds from './rounds';

export default function createRound(difficulty: number, round: number): void {
  createGameField();

  setStep(0);

  const translationButtonHint = document.querySelector(
    '.button-hint-translation',
  );
  const imgButtonHint = document.querySelector('.button-hint-img');

  if (translationButtonHint) {
    translationButtonHint.textContent = 'Show translate: off';
  }

  if (imgButtonHint) {
    imgButtonHint.textContent = 'Show background: off';
  }

  const newData = new GetCurrentData(difficulty, round);

  Promise.all([
    newData.getImg(),
    newData.getTextExample(),
    newData.getRoundsCount(),
  ]).then(([img, textArr, roundsCount]) => {
    const newPuzzle = new PuzzleGame(textArr, img);
    newPuzzle.setupPuzzle();

    const newCollectigField = new CollectingField(textArr);
    newCollectigField.setupCollectingField();

    addClickMovementPuzzle(textArr);
    dragAndDropMovementPuzzle(textArr);
    autocompleteSentence(textArr);
    setRounds(roundsCount);
  });
}
