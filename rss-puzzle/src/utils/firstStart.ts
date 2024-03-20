import createApp from './app';
import createGameField from './createGameFiled';
import createRound from './createRound';

export default function firstGameStart(): void {
  createApp();
  createGameField();
  createRound(1, 0);
}
