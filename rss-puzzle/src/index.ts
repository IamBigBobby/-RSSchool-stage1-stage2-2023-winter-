import './main.scss';
import { main } from './componets/tagsFarm';
import { createGameFiled } from './utils/createGameFiled';

const App = main('main');

const body = document.body;

body.appendChild(App.getNode());

createGameFiled();
