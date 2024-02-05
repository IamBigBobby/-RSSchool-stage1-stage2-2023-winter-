export { clickAnimationDown, clickAnimationUp };

function clickAnimationDown(event) {
  event.target.classList.add('keyboard__key_active');
}

function clickAnimationUp() {
  const keys = document.querySelectorAll('.keyboard__key');
  keys.forEach((key) => {
    key.classList.remove('keyboard__key_active');
  });
}
