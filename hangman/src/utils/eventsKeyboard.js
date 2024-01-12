export { eventsKeyboard };
import { checkInput } from './checkInput.js';
import { clickAnimationDown, clickAnimationUp } from './clickAnimation.js';
import { trueAnswer } from './generadeQuestion.js';
import { keyAnimationDown, keyAnimationUp } from './keyAnimation.js';

function eventsKeyboard() {
  const keyboardKeys = document.querySelectorAll('.keyboard__key');

  keyboardKeys.forEach((key) => {
    key.addEventListener('click', clickHandler);

    key.addEventListener('mousedown', mousedownHandler);

    key.addEventListener('mouseup', mouseupHandler);
  });

  document.addEventListener('keydown', keydownHandler);

  document.addEventListener('keyup', keyupHandler);
}

function clickHandler(event) {
  checkInput(
    event,
    event.target.innerHTML,
    trueAnswer,
    document.querySelector('.info-block__question').innerHTML,
  );
}

function mousedownHandler(event) {
  clickAnimationDown(event);
}

function mouseupHandler() {
  clickAnimationUp();
}

function keydownHandler(event) {
  checkInput(
    event,
    event.key.toUpperCase(),
    trueAnswer,
    document.querySelector('.info-block__question').innerHTML,
  );
  keyAnimationDown(event);
}

function keyupHandler() {
  keyAnimationUp();
}
