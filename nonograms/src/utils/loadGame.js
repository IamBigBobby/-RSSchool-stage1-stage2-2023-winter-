import { clickLogic } from "./playerLogic";
import {
  activateTimer,
  currentSeconds,
  setCurrentSeconds,
  stopTimer,
} from "./timer";

export { loadGame };

function loadGame() {
  // load table
  const saveTable = localStorage
    .getItem("IamBigBobby_table")
    .replace(/\\/g, "")
    .replace('<table class="table-nonograms">', "")
    .replace("</table>", "")
    .slice(1, -1);

  const oldTable = document.querySelector(".table-nonograms");

  oldTable.remove();

  const wrapper = document.querySelector(".wrapper-nonograms__table-wrapper");
  const newTable = document.createElement("table");
  newTable.className = "table-nonograms";

  newTable.insertAdjacentHTML("beforeend", saveTable);

  wrapper.append(newTable);

  newTable.addEventListener("mousedown", clickLogic);

  // load timer
  console.log(currentSeconds);
  stopTimer();
  const saveSeconds = Number(localStorage.getItem("IamBigBobby_timer"));
  console.log(saveSeconds);
  setCurrentSeconds(saveSeconds);
  console.log(currentSeconds);
  activateTimer();
}
