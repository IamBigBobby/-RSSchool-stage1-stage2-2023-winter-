export { chooseDifficulty };
import { data } from "../data/dataMatrix";

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
      lvlButtonCreate.className = "top-menu-nonograms__easy-choose-button";
      lvlButtonCreate.innerHTML = `${data[difficulty][i].name}`;
      nonogramsChooseLvl.append(lvlButtonCreate);
    }
  }
}
