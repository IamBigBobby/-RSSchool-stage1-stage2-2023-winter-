import './main.scss';
import { createGameFiled } from './utils/createGameFiled';
import { createApp } from './utils/app';
import { PuzzleGame } from './utils/createPuzzle';
import { GetCurrentData } from './utils/getData';
import { CollectingField } from './utils/createCollectingField';
import { addClickmovementPuzzle } from './utils/clickAdding';
import { dragAndDropMovementPuzzle } from './utils/dragAndDropAdding';
import { autocompleteSentense } from './utils/autoCompleteSentense';
import { setDifficulty } from './utils/difficulty';
import { setRounds } from './utils/rounds';

createApp();
createGameFiled();

const newData = new GetCurrentData(1, 0);

console.log(newData.getLvlData());
console.log(newData.getRoundsCount());

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
