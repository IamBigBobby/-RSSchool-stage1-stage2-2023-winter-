export { removeListeners };
import {
  clickHandler,
  keydownHandler,
  keyupHandler,
  mousedownHandler,
  mouseupHandler,
} from './eventsKeyboard';

function removeListeners() {
  const keyboardKeys = document.querySelectorAll('.keyboard__key');

  keyboardKeys.forEach((key) => {
    key.removeEventListener('click', clickHandler);

    key.removeEventListener('mousedown', mousedownHandler);

    key.removeEventListener('mouseup', mouseupHandler);
  });

  document.removeEventListener('keydown', keydownHandler);

  document.removeEventListener('keyup', keyupHandler);
}
