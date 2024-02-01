import { data } from "../data/dataMatrix";
import { createGame } from "./createField";
import { playerLogic } from "./playerLogic";

export { generateNewGame };

function generateNewGame(event) {
  const selectedLvlName = event.target.textContent;
  let selectedArr;
  for (let difficulty in data) {
    for (let i = 0; i < data[difficulty].length; i++) {
      if (data[difficulty][i].name === selectedLvlName) {
        selectedArr = data[difficulty][i].matrix;
      }
    }
  }
  const table = document.querySelector(".table-nonograms");
  table.remove();

  createGame(selectedArr);
  playerLogic();
}
