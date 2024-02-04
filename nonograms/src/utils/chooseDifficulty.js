export { chooseDifficulty };
import { data } from "../data/dataMatrix";
import { generateNewGame } from "./generateNewGame";

function chooseDifficulty(event) {
  const nonogramsChooseLvl = document.querySelector(
    ".top-menu-nonograms__choose-lvl"
  );

  if (event === undefined) {
    for (let i = 0; i < data.easy.length; i++) {
      const lvlButtonCreate = document.createElement("button");

      if (i === 0) {
        lvlButtonCreate.className =
          "top-menu-nonograms__easy-choose-button button_active";
      } else {
        lvlButtonCreate.className = "top-menu-nonograms__easy-choose-button";
      }
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
    const nonogramsBlockLvl = document.querySelector(
      ".top-menu-nonograms__lvl-block"
    );
    const nonogramsBlockLvlChildren = nonogramsBlockLvl.querySelectorAll(
      ".top-menu-nonograms__lvl-block > *"
    );

    nonogramsBlockLvlChildren.forEach((element) => {
      element.classList.remove("button_active");
    });

    const difficultyClass = event.target.className;
    const difficulty = difficultyClass
      .replace("top-menu-nonograms__", "")
      .replace("-lvl", "");

    while (nonogramsChooseLvl.firstChild) {
      nonogramsChooseLvl.removeChild(nonogramsChooseLvl.firstChild);
    }

    event.target.classList.add("button_active");

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
