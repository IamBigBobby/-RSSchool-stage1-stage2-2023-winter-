import './main.scss';
import { createGameFiled } from './utils/createGameFiled';
import { createApp } from './utils/app';
import { PuzzleGame } from './utils/createPuzzle';
import { GetCurrentData } from './utils/getData';
import { CollectingField } from './utils/createCollectingField';
import { addClickmovementPuzzle } from './utils/clickAdding';
import { dragAndDropMovementPuzzle } from './utils/dragAndDropAdding';

createApp();
createGameFiled();

const newData = new GetCurrentData(1, 0);
console.log(newData.getTextExample());
Promise.all([
  newData.getImg(),
  newData.getTextExample(),
  newData.getTextArr(),
]).then(([img, textArr]) => {
  const newPuzzle = new PuzzleGame(textArr, img);
  newPuzzle.setupPuzzle();

  const newCollectigField = new CollectingField(textArr);
  newCollectigField.setupCollectingField();

  addClickmovementPuzzle(textArr);
  dragAndDropMovementPuzzle(textArr);
});
