import { sortWinGame } from "./getWinGame";

export { showScoreboard };

function showScoreboard() {
  const winArr = sortWinGame();

  const createPopUpScoreboardBackground = document.createElement("div");
  createPopUpScoreboardBackground.classList = "pop-up-score__background";

  createPopUpScoreboardBackground.innerHTML = `
  <div class="pop-up-score__content">
  <table class="score__table">
    <thead>
        <tr>
            <th>position</th>
            <th>lvl</th>
            <th>difficulty</th>
            <th>time</th>
        </tr>
    </thead>
    <tbody class="score__table-info">
    </tbody>
</table>
  </div>
  `;

  document.body.prepend(createPopUpScoreboardBackground);

  const theme = document.querySelector(
    ".nonograms__menu__toggle-theme"
  ).textContent;
  const popUpContent = document.querySelector(".pop-up-score__content");

  if (theme === "theme: dark") {
    popUpContent.style.color = "black";
  }

  const tableInfo = document.querySelector(".score__table-info");

  for (let i = 0; i < winArr.length; i++) {
    const stringCreate = document.createElement("tr");
    stringCreate.className = `score__win-result-${i + 1}`;
    tableInfo.append(stringCreate);

    const string = document.querySelector(`.score__win-result-${i + 1}`);

    const positionCellCreate = document.createElement("td");
    positionCellCreate.className = "score__posotin";
    positionCellCreate.innerHTML = `${i + 1}`;
    string.append(positionCellCreate);

    const lvlCellCreate = document.createElement("td");
    lvlCellCreate.className = "score__lvl";
    lvlCellCreate.innerHTML = `${winArr[i].lvl}`;
    string.append(lvlCellCreate);

    const difficultyCellCreate = document.createElement("td");
    difficultyCellCreate.className = "score__difficulty";
    difficultyCellCreate.innerHTML = `${winArr[i].difficulty}`;
    string.append(difficultyCellCreate);

    const timeCellCreate = document.createElement("td");
    timeCellCreate.className = "score__time";

    const winTime = winArr[i].time;

    const minutes = Math.floor((winTime % 3600) / 60);
    const seconds = winTime % 60;

    const strMinutes = minutes.toString().padStart(2, "0");
    const strSeconds = seconds.toString().padStart(2, "0");

    timeCellCreate.innerHTML = `${strMinutes}:${strSeconds}`;
    string.append(timeCellCreate);
  }

  const popUpScoreboardBackground = document.querySelector(
    ".pop-up-score__background"
  );
  popUpScoreboardBackground.addEventListener("mousedown", closeScorePopUp);
}

function closeScorePopUp(event) {
  if (event.target.classList.contains("pop-up-score__background")) {
    const popUp = document.querySelector(".pop-up-score__background");
    popUp.remove();
  }
}
