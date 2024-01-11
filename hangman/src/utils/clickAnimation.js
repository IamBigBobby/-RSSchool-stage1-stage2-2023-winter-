export { clickAnimationDown, clickAnimationUp };

function clickAnimationDown(event) {
  console.log(event.target);
  event.target.classList.add('keyboard__key_active');
}

function clickAnimationUp() {
  const keys = document.querySelectorAll('.keyboard__key');
  keys.forEach((key) => {
    key.classList.remove('keyboard__key_active');
  });
}
