import './main.scss';
import { main } from './componets/tagsFarm';
import { createGameFiled } from './utils/createGameFiled';
import { getData } from './utils/getData';

const App = main('main');

const body = document.body;

body.appendChild(App.getNode());

createGameFiled();

getData(
  'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel1.json'
).then((jsonData) => {
  console.log(jsonData.rounds);
});
