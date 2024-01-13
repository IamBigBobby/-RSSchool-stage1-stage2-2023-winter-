export { checkInput };
import { addDisabledKey } from './addDisabledKey.js';
import { popupLose } from './appearancePopupLose.js';
import { popupWin } from './appearancePopupWin.js';
import { trueAnswer } from './generadeQuestion.js';
import { saveGameForRealode } from './saveData.js';

function checkInput(event, letter, answer, question) {
  const englishAlphabetUpperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const englishAlphabetLowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const englishAlphabet = [
    ...englishAlphabetUpperCase,
    ...englishAlphabetLowerCase,
  ];
  const englishLettersCodes = [
    'KeyA',
    'KeyB',
    'KeyC',
    'KeyD',
    'KeyE',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyI',
    'KeyJ',
    'KeyK',
    'KeyL',
    'KeyM',
    'KeyN',
    'KeyO',
    'KeyP',
    'KeyQ',
    'KeyR',
    'KeyS',
    'KeyT',
    'KeyU',
    'KeyV',
    'KeyW',
    'KeyX',
    'KeyY',
    'KeyZ',
  ];

  if (!englishAlphabet.includes(letter)) {
    alert('Please use English layout');

    const keys = document.querySelectorAll('.keyboard__key');

    keys.forEach((key) => {
      key.classList.remove('keyboard__key_active');
    });
    return;
  }

  if (
    !englishLettersCodes.includes(event.code) &&
    !event.pointerType === 'mouse'
  ) {
    return;
  }

  const answerBlock = document.querySelector('.info-block__answer');

  const failCounter = document.querySelector('.info-block__fail-attemts');
  let numberOfFail = failCounter.innerHTML;

  let checkChar = answer.toUpperCase().includes(letter);

  if (checkChar) {
    for (let i = 0; i < answer.length; i++) {
      let oldInvisibleAnswer = answerBlock.innerHTML;
      let newInvisibleAnswer = oldInvisibleAnswer;

      if (answer[i].toUpperCase() === letter) {
        const firstPart = oldInvisibleAnswer.slice(0, i);
        const secondPart = oldInvisibleAnswer.slice(i + 1);

        newInvisibleAnswer = `${firstPart}${letter}${secondPart}`;

        answerBlock.innerHTML = newInvisibleAnswer;

        if (newInvisibleAnswer === answer.toUpperCase()) {
          addDisabledKey(event);
          popupWin(answer);
          localStorage.clear();
          return;
        }

        addDisabledKey(event);

        saveGameForRealode(
          newInvisibleAnswer,
          question,
          numberOfFail,
          trueAnswer,
          event.keyCode || Number(event.target.getAttribute('data')),
        );

        if (i === answer.length - 1) {
          return;
        }
      }
    }
  } else {
    if (numberOfFail >= 6) {
      numberOfFail = 6;
    } else {
      numberOfFail++;
      failCounter.innerHTML = numberOfFail;
    }

    renderLittleMan(numberOfFail);

    saveGameForRealode(
      answerBlock.innerHTML,
      question,
      numberOfFail,
      trueAnswer,
    );

    if (numberOfFail === 6) {
      popupLose(answer);
      localStorage.clear();
      return;
    }
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
