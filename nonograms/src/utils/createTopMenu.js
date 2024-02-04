export { createTopMenu };
import { chooseDifficulty } from "./chooseDifficulty";

function createTopMenu() {
  const nameNonogramCreate = document.createElement("div");
  nameNonogramCreate.className = "top-menu-nonograms";

  const wrapper = document.querySelector(".wrapper-nonograms");
  wrapper.prepend(nameNonogramCreate);

  const nameNonogram = document.querySelector(".top-menu-nonograms");

  // create lvl block
  const nonogramsLevelsBlockCreate = document.createElement("div");
  nonogramsLevelsBlockCreate.className = "top-menu-nonograms__lvl-block";
  nameNonogram.append(nonogramsLevelsBlockCreate);

  const nonogramsLevelsBlock = document.querySelector(
    ".top-menu-nonograms__lvl-block"
  );

  const nonogramsLevelEasyCreate = document.createElement("button");
  nonogramsLevelEasyCreate.className = "top-menu-nonograms__easy-lvl";
  nonogramsLevelEasyCreate.innerHTML = "easy";
  nonogramsLevelsBlock.append(nonogramsLevelEasyCreate);

  const nonogramsLevelMediumCreate = document.createElement("button");
  nonogramsLevelMediumCreate.className = "top-menu-nonograms__medium-lvl";
  nonogramsLevelMediumCreate.innerHTML = "medium";
  nonogramsLevelsBlock.append(nonogramsLevelMediumCreate);

  const nonogramsLevelHardCreate = document.createElement("button");
  nonogramsLevelHardCreate.className = "top-menu-nonograms__hard-lvl";
  nonogramsLevelHardCreate.innerHTML = "hard";
  nonogramsLevelsBlock.append(nonogramsLevelHardCreate);

  // create level buttons easy
  const nonogramsChooseLvlCreate = document.createElement("div");
  nonogramsChooseLvlCreate.className = "top-menu-nonograms__choose-lvl";
  nameNonogram.append(nonogramsChooseLvlCreate);

  // add listeners
  const nonogramsLevelEasy = document.querySelector(
    ".top-menu-nonograms__easy-lvl"
  );
  const nonogramsLevelMedium = document.querySelector(
    ".top-menu-nonograms__medium-lvl"
  );
  const nonogramsLevelHard = document.querySelector(
    ".top-menu-nonograms__hard-lvl"
  );

  nonogramsLevelEasy.addEventListener("mousedown", chooseDifficulty);
  nonogramsLevelMedium.addEventListener("mousedown", chooseDifficulty);
  nonogramsLevelHard.addEventListener("mousedown", chooseDifficulty);

  const createInfoAboutGame = document.createElement("div");
  createInfoAboutGame.className = "top-menu-nonograms__game-info";
  createInfoAboutGame.innerHTML = `Difficulty: easy<br>Level: heart`;
  nameNonogram.append(createInfoAboutGame);

  chooseDifficulty();
}
