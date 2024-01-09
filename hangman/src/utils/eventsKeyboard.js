export { eventsKeyboard };
import { questionData } from './generadeQuestion.js';
import { checkInput } from './checkInput.js';

function eventsKeyboard() {
  const keyboardKeys = document.querySelectorAll('.keyboard__key');

  keyboardKeys.forEach((key) => {
    key.addEventListener('click', function (event) {
      // console.log(key.innerHTML, questionData.questions[0].answer);
      checkInput(key.innerHTML, questionData.questions[0].answer);
    });
  });

  document.addEventListener('keydown', function (event) {
    // console.log(event.key.toUpperCase(), questionData.questions[0].answer);
    checkInput(event.key.toUpperCase(), questionData.questions[0].answer);
  });
}
