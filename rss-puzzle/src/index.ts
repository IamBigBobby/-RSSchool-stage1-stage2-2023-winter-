import './main.scss';
import { createGameFiled } from './utils/createGameFiled';
import { getData } from './utils/getData';
import { createApp } from './utils/app';
import { PuzzleGame } from './utils/createPuzzle';
// import { setupPuzzle } from './utils/createPuzzle';

createApp();

createGameFiled();

const newPuzzle = new PuzzleGame(2, '.game-container');

newPuzzle.setupPuzzle();

// getData(
//   'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel1.json'
// ).then((jsonData) => {
//   console.log(jsonData.rounds[0].words[0].textExample.split(' ').length);
// });
