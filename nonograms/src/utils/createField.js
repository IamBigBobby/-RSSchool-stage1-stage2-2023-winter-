export { createWrapper, createGame };
import { data } from "../data/dataMatrix";

function createWrapper() {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper-nonograms";
  document.body.prepend(wrapper);
}

function createGame() {
  const table = document.createElement("table");
  table.className = "table-nonograms";

  for (let i = 0; i < data.easy[0].length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < data.easy[0].length; j++) {
      const cell = document.createElement("td");
      cell.className = "table-nonograms__cell";
      if (data.easy[0][i][j] === 1) {
        cell.className = "table-nonograms__cell table-nonograms__cell_answer";
        cell.style.backgroundColor = "black";
      }
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
  const wrapper = document.querySelector(".wrapper-nonograms");
  wrapper.prepend(table);

  countingKeys();
}

function countingKeys() {
  console.log(data.easy[0]);
  const table = document.querySelector(".table-nonograms");

  const leftKeysCell = document.createElement("td");
  leftKeysCell.className = "table-nonograms__left-keys-cell";
  const row = table.getElementsByTagName("tr");

  for (let i = 0; i < table.rows.length; i++) {
    const currentRow = table.rows[i];
    const newCell = leftKeysCell.cloneNode(true);
    currentRow.insertBefore(newCell, currentRow.firstChild);

    let keys = 0;

    for (let j = 0; j < table.rows[i].cells.length; j++) {
      let cell = table.rows[i].cells[j];
      let nextCell = table.rows[i].cells[j + 1];
      if (
        cell.classList.contains("table-nonograms__cell") &&
        cell.classList.contains("table-nonograms__cell_answer")
      ) {
        keys++;
        console.log(keys);
      }

      if (
        nextCell === undefined ||
        !(
          nextCell.classList.contains("table-nonograms__cell") &&
          nextCell.classList.contains("table-nonograms__cell_answer")
        )
      ) {
        if (keys !== 0) {
          const key = document.createElement("div");
          key.className = "table-nonograms__cell_answer";
          key.textContent = keys;

          newCell.appendChild(key);
          keys = 0;
        }
      }
    }
  }
}
