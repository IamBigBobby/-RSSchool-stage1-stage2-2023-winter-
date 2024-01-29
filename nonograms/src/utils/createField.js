export { createWrapper, createGame };
import { data } from "../data/dataMatrix";

function createWrapper() {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper-nonograms";
  document.body.prepend(wrapper);
}

function createGame() {
  console.log(data.easy[0]);
  const table = document.createElement("table-nonograms");
  table.className = "table-nonograms";

  for (let i = 0; i < data.easy[0].length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < data.easy[0].length; j++) {
      const cell = document.createElement("td");
      cell.className = "table-nonograms__cell";
      if (data.easy[0][i][j] === 1) {
        cell.className = "table-nonograms__cell_answer";
      }
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
  const wrapper = document.querySelector(".wrapper-nonograms");
  wrapper.prepend(table);
}
