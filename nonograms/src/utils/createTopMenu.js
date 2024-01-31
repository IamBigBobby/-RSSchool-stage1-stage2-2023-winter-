export { createTopMenu };
import { data } from "../data/dataMatrix";

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

  const nonogramsChooseLvl = document.querySelector(
    ".top-menu-nonograms__choose-lvl"
  );

  for (let i = 0; i < data.easy.length; i++) {
    const lvlButtonCreate = document.createElement("button");
    lvlButtonCreate.className = "top-menu-nonograms__easy-choose-button";
    lvlButtonCreate.innerHTML = `${data.easy[i].name}`;
    nonogramsChooseLvl.append(lvlButtonCreate);
  }
}

// function showLevels()
