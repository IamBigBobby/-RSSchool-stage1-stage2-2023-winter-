export { popUpWin };

function popUpWin() {
  console.log("pop up win");
  const createPopUpWinBackground = document.createElement("div");
  createPopUpWinBackground.classList = "pop-up-win__background";

  createPopUpWinBackground.innerHTML = `
  <div class="pop-up-win__content">
  <p>Great! You have solved the nonogram in ## seconds!</p>
  </div>
  `;
  document.body.prepend(createPopUpWinBackground);
}
