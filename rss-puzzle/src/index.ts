import './main.scss';
import { createGameFiled } from './utils/createGameFiled';
import { createApp } from './utils/app';
import { PuzzleGame } from './utils/createPuzzle';
import { GetCurrentData } from './utils/getData';

createApp();

createGameFiled();

const newPuzzle = new PuzzleGame(2, '.game-container');

newPuzzle.setupPuzzle();

const newData = new GetCurrentData(2, 4);

Promise.all([newData.getTextLength()]).then(([length]) => {
  const newPuzzle = new PuzzleGame(length);
  newPuzzle.setupPuzzle();
});
