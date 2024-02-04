import { currentSeconds } from "./timer";

export { saveGame };

function saveGame() {
  console.log("save");
  const table = document.querySelector(".table-nonograms");
  const gameInfo = document.querySelector(".top-menu-nonograms__game-info");
  const timer = currentSeconds;
  console.log(table, gameInfo, timer);

  const saveTable = JSON.stringify(table.outerHTML);
  const saveGameInfo = JSON.stringify(gameInfo.outerHTML);

  localStorage.setItem("IamBigBobby_table", saveTable);
  localStorage.setItem("IamBigBobby_gameInfo", saveGameInfo);
  localStorage.setItem("IamBigBobby_timer", timer);

  const loadButton = document.querySelector(".nonograms__menu__load");
  loadButton.classList.remove("button_disabled");
}
