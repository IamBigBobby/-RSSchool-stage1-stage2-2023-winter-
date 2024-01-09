export { eventsKeyboard };
import { questionData } from './generadeQuestion.js';
import { checkInput } from './checkInput.js';

function eventsKeyboard() {
  const keyboardKeys = document.querySelectorAll('.keyboard__key');

  keyboardKeys.forEach((key) => {
    key.addEventListener('click', function (event) {
      checkInput(
        key.innerHTML,
        questionData.questions[0].answer,
        questionData.questions[0].question,
      );
    });
  });

  document.addEventListener('keydown', function (event) {
    checkInput(
      event.key.toUpperCase(),
      questionData.questions[0].answer,
      questionData.questions[0].question,
    );
  });
}
