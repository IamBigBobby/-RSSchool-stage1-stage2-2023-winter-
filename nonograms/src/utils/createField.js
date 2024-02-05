import { showScoreboard } from "./appearingScoreBoard";
import { createRandomGame } from "./createRandomGame";
import { loadGame } from "./loadGame";
import { openAnswer } from "./openAnswer";
import { saveGame } from "./saveGame";
import { startNewGame } from "./startNewGame";
import { switchSound } from "./soundSwitch";

export { createWrapper, createGame };

function createWrapper() {
  const wrapperCreate = document.createElement("div");
  wrapperCreate.className = "wrapper-nonograms";
  document.body.prepend(wrapperCreate);

  const wrapper = document.querySelector(".wrapper-nonograms");

  const wrapperNonogramCreate = document.createElement("div");
  wrapperNonogramCreate.className = "wrapper-nonograms__table-wrapper";
  wrapper.prepend(wrapperNonogramCreate);

  const menuCreate = document.createElement("div");
  menuCreate.className = "nonagrams__menu";
  wrapper.prepend(menuCreate);

  const menu = document.querySelector(".nonagrams__menu");

  const newGameButtonCreate = document.createElement("button");
  newGameButtonCreate.className = "nonagrams__menu__new-game";
  newGameButtonCreate.innerHTML = "new game";
  menu.prepend(newGameButtonCreate);

  const randomGameButtonCreate = document.createElement("button");
  randomGameButtonCreate.className = "nonagrams__menu__random-game";
  randomGameButtonCreate.innerHTML = "random game";
  menu.prepend(randomGameButtonCreate);

  const helpGameButtonCreate = document.createElement("button");
  helpGameButtonCreate.className = "nonagrams__menu__help";
  helpGameButtonCreate.innerHTML = "help mode: off";
  menu.prepend(helpGameButtonCreate);

  const scoreGameButtonCreate = document.createElement("button");
  scoreGameButtonCreate.className = "nonagrams__menu__score";
  scoreGameButtonCreate.innerHTML = "score board top 5";
  menu.prepend(scoreGameButtonCreate);

  const soundButtonCreate = document.createElement("button");
  soundButtonCreate.classList = "nonograms__menu__sound";
  soundButtonCreate.innerHTML = "sound: off";
  menu.prepend(soundButtonCreate);

  const saveGameButtonCreate = document.createElement("button");
  saveGameButtonCreate.className = "nonograms__menu__save";
  saveGameButtonCreate.innerHTML = "save game";
  menu.append(saveGameButtonCreate);

  const loadGameButtonCreate = document.createElement("button");
  if (!localStorage.getItem("IamBigBobby_gameInfo")) {
    loadGameButtonCreate.className = "nonograms__menu__load button_disabled";
  } else {
    loadGameButtonCreate.className = "nonograms__menu__load";
  }
  loadGameButtonCreate.innerHTML = "load game";
  menu.append(loadGameButtonCreate);

  const timer = document.createElement("div");
  timer.classList = "nonograms__timer";
  timer.innerHTML = "00:00";
  wrapper.prepend(timer);

  const newGameButton = document.querySelector(".nonagrams__menu__new-game");
  const randomGameButton = document.querySelector(
    ".nonagrams__menu__random-game"
  );
  const helpGameButton = document.querySelector(".nonagrams__menu__help");
  const scoreGameButton = document.querySelector(".nonagrams__menu__score");
  const saveGameButton = document.querySelector(".nonograms__menu__save");
  const loadGameButton = document.querySelector(".nonograms__menu__load");
  const soundButton = document.querySelector(".nonograms__menu__sound");

  helpGameButton.addEventListener("mousedown", openAnswer);
  newGameButton.addEventListener("mousedown", startNewGame);
  randomGameButton.addEventListener("mousedown", createRandomGame);
  saveGameButton.addEventListener("mousedown", saveGame);
  scoreGameButton.addEventListener("mousedown", showScoreboard);
  soundButton.addEventListener("mousedown", switchSound);

  if (localStorage.getItem("IamBigBobby_gameInfo")) {
    loadGameButton.addEventListener("mousedown", loadGame);
  }
}

function createGame(arr) {
  const table = document.createElement("table");
  table.className = "table-nonograms";

  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < arr.length; j++) {
      const cell = document.createElement("td");
      cell.className = "table-nonograms__cell";
      if (arr[i][j] === 1) {
        cell.className = "table-nonograms__cell table-nonograms__cell_answer";
      }
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
  const wrapperNonogram = document.querySelector(
    ".wrapper-nonograms__table-wrapper"
  );
  wrapperNonogram.append(table);

  countingKeys();
}

function countingKeys() {
  const table = document.querySelector(".table-nonograms");

  // horizontal counting
  for (let i = 0; i < table.rows.length; i++) {
    const currentRow = table.rows[i];
    const newCell = document.createElement("td");
    newCell.className = "table-nonograms__cell_keys-left";
    currentRow.insertBefore(newCell, currentRow.firstChild);

    let keys = 0;

    for (let j = 0; j < table.rows[i].cells.length; j++) {
      const cell = table.rows[i].cells[j];
      const nextCell = table.rows[i].cells[j + 1];
      if (
        cell.classList.contains("table-nonograms__cell") &&
        cell.classList.contains("table-nonograms__cell_answer")
      ) {
        keys++;
      }

      if (
        nextCell === undefined ||
        !(
          nextCell.classList.contains("table-nonograms__cell") &&
          nextCell.classList.contains("table-nonograms__cell_answer")
        )
      ) {
        if (keys !== 0) {
          newCell.innerHTML += keys;
          keys = 0;
        }
      }
    }

    if (newCell.textContent === "") {
      newCell.innerHTML = 0;
    }
  }

  // vertical counting
  const newRow = document.createElement("tr");

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    const newCell = document.createElement("td");
    newCell.className = "table-nonograms__cell_keys-top";

    newRow.appendChild(newCell);

    let keys = 0;

    for (let j = 0; j < table.rows.length; j++) {
      const cell = table.rows[j].cells[i];

      if (
        cell.classList.contains("table-nonograms__cell") &&
        cell.classList.contains("table-nonograms__cell_answer")
      ) {
        keys++;
        if (j === table.rows.length - 1) {
          if (keys !== 0) {
            const keySpan = document.createElement("span");
            keySpan.textContent = keys;
            newCell.appendChild(keySpan);
          }
        }
      } else {
        if (keys !== 0) {
          const keySpan = document.createElement("span");
          keySpan.textContent = keys;
          newCell.appendChild(keySpan);
          keys = 0;
        }
      }
    }
    if (newCell.textContent === "" && i !== 0) {
      const keySpan = document.createElement("span");
      keySpan.textContent = 0;
      newCell.appendChild(keySpan);
    }
  }
  table.insertBefore(newRow, table.firstChild);
}
