import { createApp } from './app';
import { createGameFiled } from './createGameFiled';
import { createRound } from './createRound';

export function firstGameStart(): void {
  createApp();
  createGameFiled();
  createRound(1, 0);
}
