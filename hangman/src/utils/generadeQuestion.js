export { fetchData, createQuestionBlock };

let questionData;

function fetchData() {
  fetch('./src/data.json')
    .then((response) => response.json())
    .then((data) => {
      questionData = data;
      createQuestionBlock();
    })
    .catch((error) => console.error(error));
}

function createQuestionBlock() {
  console.log(questionData);
  let infoblock = document.createElement('div');
  infoblock.className = 'info-block';

  infoblock.innerHTML = `
  <div class="info-block__question">${questionData.questions[0].question}</div>
  <div class="info-block__answer">${questionData.questions[0].answer}</div>
  `;

  document.querySelector('.keyboard').after(infoblock);
}
