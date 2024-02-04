import { clickLogic } from "./playerLogic";

export { loadGame };

function loadGame() {
  console.log("load");
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
}
