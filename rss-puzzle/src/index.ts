import './main.scss';
import { createGameFiled } from './utils/createGameFiled';
import { createApp } from './utils/app';
import { PuzzleGame } from './utils/createPuzzle';
import { GetCurrentData } from './utils/getData';
import { CollectingField } from './utils/createCollectingField';
import { addClickmovementPuzzle } from './utils/clickAdding';

createApp();
createGameFiled();

const newData = new GetCurrentData(4, 23);

console.log(newData.getLvlData());
console.log(newData.getTextExample());

Promise.all([newData.getImg(), newData.getTextExample()]).then(
  ([img, length]) => {
    const newPuzzle = new PuzzleGame(length, img);
    newPuzzle.setupPuzzle();

    const newCollectigField = new CollectingField(length);
    newCollectigField.setupCollectingField();

    addClickmovementPuzzle();
  }
);
