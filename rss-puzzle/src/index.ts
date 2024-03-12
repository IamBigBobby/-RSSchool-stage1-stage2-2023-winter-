import './main.scss';
import { createGameFiled } from './utils/createGameFiled';
import { createApp } from './utils/app';
import { PuzzleGame } from './utils/createPuzzle';
import { GetCurrentData } from './utils/getData';

createApp();
createGameFiled();

const newPuzzle = new PuzzleGame(2, '.game-container');

newPuzzle.setupPuzzle();

const newData = new GetCurrentData(1, 3);

console.log(newData.getTextArr());

Promise.all([newData.getImg(), newData.getTextLength()]).then(
  ([img, length]) => {
    const newPuzzle = new PuzzleGame(length, img);
    newPuzzle.setupPuzzle();
  }
);
