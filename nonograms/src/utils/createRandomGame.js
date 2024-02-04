export { createRandomGame };
import { data } from "../data/dataMatrix";
import { createGame } from "./createField";
import { playerLogic } from "./playerLogic";
import { stopTimer } from "./timer";

function createRandomGame() {
  const arrDifficulty = [];

  for (let difficulty in data) {
    arrDifficulty.push(difficulty);
  }

  const randomIndexArrDifficulty = Math.floor(
    Math.random() * arrDifficulty.length
  );

  const difficultyRandomLenght =
    data[arrDifficulty[randomIndexArrDifficulty]].length - 1;

  const randomDifficultyLengthIndex = Math.floor(
    Math.random() * difficultyRandomLenght
  );

  // console.log(arrDifficulty[randomIndexArrDifficulty]);
  // console.log(data[arrDifficulty[randomIndexArrDifficulty]]);
  // console.log(difficultyRandomLenght);
  // console.log(randomDifficultyLengthIndex);

  stopTimer();

  const randomArr =
    data[arrDifficulty[randomIndexArrDifficulty]][randomDifficultyLengthIndex]
      .matrix;
  const randomName =
    data[arrDifficulty[randomIndexArrDifficulty]][randomDifficultyLengthIndex]
      .name;
  const randomDifficulty = arrDifficulty[randomIndexArrDifficulty];

  // console.log(randomArr, randomName, randomDifficulty);

  const gameInfo = document.querySelector(".top-menu-nonograms__game-info");

  gameInfo.innerHTML = `Difficulty: ${randomDifficulty} / Level: ${randomName}`;

  const table = document.querySelector(".table-nonograms");
  table.remove();

  createGame(randomArr);
  playerLogic();
}
