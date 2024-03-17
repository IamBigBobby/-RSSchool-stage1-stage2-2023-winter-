import './main.scss';
import { createApp } from './utils/app';
import { createGameFiled } from './utils/createGameFiled';
import { createRound } from './utils/createRound';

createApp();
createGameFiled();
createRound(1, 0);
