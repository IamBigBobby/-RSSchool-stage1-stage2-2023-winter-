import { saveGameForRealode } from './saveData';

export {
  createQuestion,
  createQuestionBlock,
  creatFailedAttemptCounter,
  questionData,
  trueAnswer,
};

let questionData;
let trueAnswer;

function createQuestion() {
  fetch('./src/data.json')
    .then((response) => response.json())
    .then((data) => {
      questionData = data;
      createQuestionBlock();
      creatFailedAttemptCounter();
    })
    .catch((error) => console.error(error));
}

function createQuestionBlock(loadAswer, loadQuestion, baseAnswer) {
  let infoblock = document.createElement('div');
  infoblock.className = 'info-block';

  if (loadAswer && loadQuestion && baseAnswer) {
    infoblock.innerHTML = `
  <div class="info-block__question">${loadQuestion}</div>
  <div class="info-block__answer">${loadAswer}</div>
  `;

    trueAnswer = baseAnswer;

    console.log(trueAnswer);
  } else {
    let randomQuestion = getRandomIntInclusive(
      0,
      questionData.questions.length - 1,
    );
    trueAnswer = questionData.questions[randomQuestion].answer;

    if (trueAnswer === localStorage.getItem('IamBigBobby_generateAnswer')) {
      randomQuestion++;
      trueAnswer = questionData.questions[randomQuestion].answer;
    }

    localStorage.setItem('IamBigBobby_generateAnswer', trueAnswer);

    infoblock.innerHTML = `
  <div class="info-block__question">${
    questionData.questions[randomQuestion].question
  }</div>
  <div class="info-block__answer">${'_'.repeat(
    questionData.questions[randomQuestion].answer.length,
  )}</div>
  `;
  }

  saveGameForRealode(...[, , , , []]);

  document.querySelector('.keyboard').after(infoblock);

  console.log(trueAnswer);
}

function creatFailedAttemptCounter(countFail) {
  let attemptCounter = document.createElement('div');
  attemptCounter.className = 'info-block__counter';

  if (countFail) {
    attemptCounter.innerHTML = `
  fail attempts <span class="info-block__fail-attemts">${Number(
    countFail,
  )}</span>/6
  `;
  } else {
    attemptCounter.innerHTML = `
  fail attempts <span class="info-block__fail-attemts">0</span>/6
  `;
  }

  document.querySelector('.info-block__answer').after(attemptCounter);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
