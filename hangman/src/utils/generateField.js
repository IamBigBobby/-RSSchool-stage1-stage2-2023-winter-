export { renderMain, renderGallow };

function renderMain() {
  let main = document.createElement('main');
  main.className = 'main';
  document.body.prepend(main);
}

function renderGallow() {
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
}
