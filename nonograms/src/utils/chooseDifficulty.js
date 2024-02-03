export { chooseDifficulty };
import { data } from "../data/dataMatrix";
import { generateNewGame } from "./generateNewGame";
import { stopTimer } from "./timer";

function chooseDifficulty(event) {
  const nonogramsChooseLvl = document.querySelector(
    ".top-menu-nonograms__choose-lvl"
  );

  if (event === undefined) {
    for (let i = 0; i < data.easy.length; i++) {
      const lvlButtonCreate = document.createElement("button");
      lvlButtonCreate.className = "top-menu-nonograms__easy-choose-button";
      lvlButtonCreate.innerHTML = `${data.easy[i].name}`;
      nonogramsChooseLvl.append(lvlButtonCreate);

      const lvlButton = document.querySelectorAll(
        ".top-menu-nonograms__easy-choose-button"
      );

      lvlButton.forEach((button) => {
        button.addEventListener("mousedown", generateNewGame);
      });
    }
  } else {
    const difficultyClass = event.target.className;
    const difficulty = difficultyClass
      .replace("top-menu-nonograms__", "")
      .replace("-lvl", "");
    console.log(difficulty);

    while (nonogramsChooseLvl.firstChild) {
      nonogramsChooseLvl.removeChild(nonogramsChooseLvl.firstChild);
    }

    for (let i = 0; i < data[difficulty].length; i++) {
      const lvlButtonCreate = document.createElement("button");
      lvlButtonCreate.className = `top-menu-nonograms__${difficulty}-choose-button`;
      lvlButtonCreate.innerHTML = `${data[difficulty][i].name}`;
      nonogramsChooseLvl.append(lvlButtonCreate);

      const lvlButton = document.querySelectorAll(
        `.top-menu-nonograms__${difficulty}-choose-button`
      );
      lvlButton.forEach((button) => {
        button.addEventListener("mousedown", generateNewGame);
      });
    }
  }
}
