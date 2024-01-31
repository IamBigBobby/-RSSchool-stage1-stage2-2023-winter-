export { createWrapper, createGame };

function createWrapper() {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper-nonograms";
  document.body.prepend(wrapper);
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
  const wrapper = document.querySelector(".wrapper-nonograms");
  wrapper.prepend(table);

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
