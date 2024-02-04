export { showScoreboard };

function showScoreboard() {
  console.log("click");
  const createPopUpWinBackground = document.createElement("div");
  createPopUpWinBackground.classList = "pop-up-win__background";

  createPopUpWinBackground.innerHTML = `
  <div class="pop-up-score__content">
  <table class="score__table">
    <thead>
        <tr>
            <th>position</th>
            <th>lvl</th>
            <th>difficulty</th>
            <th>time, s</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
  </div>
  `;

  document.body.prepend(createPopUpWinBackground);
}
