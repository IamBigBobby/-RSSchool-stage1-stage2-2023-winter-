export { createQuestion, createQuestionBlock, questionData };

let questionData;

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

function createQuestionBlock() {
  console.log(questionData);
  let infoblock = document.createElement('div');
  infoblock.className = 'info-block';

  infoblock.innerHTML = `
  <div class="info-block__question">${questionData.questions[0].question}</div>
  <div class="info-block__answer">${'_'.repeat(
    questionData.questions[0].answer.length,
  )}</div>
  `;

  document.querySelector('.keyboard').after(infoblock);
}

function creatFailedAttemptCounter() {
  let attemptCounter = document.createElement('div');
  attemptCounter.className = 'info-block__counter';

  attemptCounter.innerHTML = `
  fail attempts <span class="info-block__fail-attemts">0</span>/6
  `;

  document.querySelector('.info-block__answer').after(attemptCounter);
}
