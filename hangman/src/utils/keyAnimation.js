export { keyAnimationDown, keyAnimationUp };
function keyAnimationDown(event) {
  console.log(event.keyCode);
  document
    .querySelector(`.keyboard__key[data="${event.keyCode}"]`)
    .classList.add('keyboard__key_active');
}

function keyAnimationUp() {
  const keys = document.querySelectorAll('.keyboard__key');
  keys.forEach((key) => {
    key.classList.remove('keyboard__key_active');
  });
}
