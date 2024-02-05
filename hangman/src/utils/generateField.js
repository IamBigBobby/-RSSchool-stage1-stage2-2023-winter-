export { renderMain, renderGallow };

function renderMain() {
  let main = document.createElement('main');
  main.className = 'main';
  document.body.prepend(main);
}

function renderGallow(countFail) {
  let gallow = document.createElement('div');
  gallow.className = 'gallow';

  gallow.innerHTML = `
    <div class="gallow__block">
        <div class="gallow__head"></div>
        <div class="gallow__body"></div>
        <div class="gallow__hand-one"></div>
        <div class="gallow__hand-two"></div>
        <div class="gallow__leg-one"></div>
        <div class="gallow__leg-two"></div>
    </div>
    <div class="gallow__game-name">HANGMAN GAME</div>
`;
  let main = document.querySelector('.main');
  main.prepend(gallow);

  if (countFail) {
    for (let i = 0; i <= countFail; i++) {
      if (i === 0) {
        continue;
      }
      if (i === 1) {
        document.querySelector('.gallow__head').style.display = 'block';
      }
      if (i === 2) {
        document.querySelector('.gallow__body').style.display = 'block';
      }
      if (i === 3) {
        document.querySelector('.gallow__hand-one').style.display = 'block';
      }
      if (i === 4) {
        document.querySelector('.gallow__hand-two').style.display = 'block';
      }
      if (i === 5) {
        document.querySelector('.gallow__leg-one').style.display = 'block';
      }
      if (i === 6) {
        document.querySelector('.gallow__leg-two').style.display = 'block';
      }
    }
  }
}
