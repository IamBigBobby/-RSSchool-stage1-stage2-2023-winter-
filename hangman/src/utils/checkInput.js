export { checkInput };
import { saveGameForRealode } from './saveData.js';

function checkInput(letter, answer, question) {
  console.log(letter, answer);
  const answerBlock = document.querySelector('.info-block__answer');
  const oldInvisibleAnswer = answerBlock.innerHTML;
  const failCounter = document.querySelector('.info-block__fail-attemts');
  let numberOfFail = failCounter.innerHTML;

  for (let i = 0; i < answer.length; i++) {
    let newInvisibleAnswer = oldInvisibleAnswer;

    if (answer[i].toUpperCase() === letter) {
      const firstPart = oldInvisibleAnswer.slice(0, i);
      const secondPart = oldInvisibleAnswer.slice(i + 1);

      newInvisibleAnswer = `${firstPart}${letter}${secondPart}`;

      answerBlock.innerHTML = newInvisibleAnswer;

      if (newInvisibleAnswer === answer.toUpperCase()) {
        console.log('you win');
      }

      saveGameForRealode(newInvisibleAnswer, question, numberOfFail);
      return;
    }
  }

  if (numberOfFail >= 6) {
    numberOfFail = 6;
  } else {
    numberOfFail++;
    failCounter.innerHTML = numberOfFail;
  }

  renderLittleMan(numberOfFail);

  saveGameForRealode(oldInvisibleAnswer, question, numberOfFail);

  if (numberOfFail === 6) {
    console.log('you lose');
    return;
  }
}

function renderLittleMan(number) {
  switch (number) {
    case 1:
      document.querySelector('.gallow__head').style.display = 'block';
      break;
    case 2:
      document.querySelector('.gallow__body').style.display = 'block';
      break;
    case 3:
      document.querySelector('.gallow__hand-one').style.display = 'block';
      break;
    case 4:
      document.querySelector('.gallow__hand-two').style.display = 'block';
      break;
    case 5:
      document.querySelector('.gallow__leg-one').style.display = 'block';
      break;
    case 6:
      document.querySelector('.gallow__leg-two').style.display = 'block';
      break;
  }
}
