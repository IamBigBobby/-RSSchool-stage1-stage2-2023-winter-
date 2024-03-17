import { autocompleteSentense } from './autoCompleteSentense';
import { addClickmovementPuzzle } from './clickAdding';
import { CollectingField } from './createCollectingField';
import { createGameFiled } from './createGameFiled';
import { PuzzleGame } from './createPuzzle';
import { setDifficulty } from './difficulty';
import { dragAndDropMovementPuzzle } from './dragAndDropAdding';
import { GetCurrentData } from './getData';
import { setRounds } from './rounds';

export function createRound(difficulty: number, round: number): void {
  createGameFiled();

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

    addClickmovementPuzzle(textArr);
    dragAndDropMovementPuzzle(textArr);
    autocompleteSentense(textArr);
    setDifficulty();
    setRounds(roundsCount);
  });
}
