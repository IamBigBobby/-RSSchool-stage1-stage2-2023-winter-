export { eventsKeyboard };
import { checkInput } from './checkInput.js';
import { trueAnswer } from './generadeQuestion.js';
import { keyAnimationDown, keyAnimationUp } from './keyAnimation.js';

function eventsKeyboard() {
  const keyboardKeys = document.querySelectorAll('.keyboard__key');

  keyboardKeys.forEach((key) => {
    key.addEventListener('click', function (event) {
      checkInput(
        event,
        key.innerHTML,
        trueAnswer,
        document.querySelector('.info-block__question').innerHTML,
      );
    });
  });

  document.addEventListener('keydown', function (event) {
    checkInput(
      event,
      event.key.toUpperCase(),
      trueAnswer,
      document.querySelector('.info-block__question').innerHTML,
    );
    keyAnimationDown(event);
  });

  document.addEventListener('keyup', function (event) {
    keyAnimationUp();
  });
}
