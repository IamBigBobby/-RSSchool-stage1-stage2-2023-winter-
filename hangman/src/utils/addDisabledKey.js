export { addDisabledKey };

function addDisabledKey(event) {
  if (event.keyCode) {
    const key = document.querySelector(
      `.keyboard__key[data="${event.keyCode}"]`,
    );
    key.classList.add('keyboard__key_disabled');
    key.style.pointerEvents = 'none';
  }
  if (event.target.classList.contains('keyboard__key')) {
    const click = event.target;
    click.classList.add('keyboard__key_disabled');
    click.style.pointerEvents = 'none';
  }
}
