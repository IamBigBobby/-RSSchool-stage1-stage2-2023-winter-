export { addDisabledKey };

function addDisabledKey(event) {
  const key = document.querySelector(`.keyboard__key[data="${event.keyCode}"]`);
  key.classList.add('keyboard__key_disabled');
  key.style.pointerEvents = 'none';
}
