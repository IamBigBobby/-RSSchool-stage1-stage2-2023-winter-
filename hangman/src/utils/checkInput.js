export { checkInput };

function checkInput(letter, answer) {
  console.log(letter, answer);
  const answerBlock = document.querySelector('.info-block__answer');
  const oldInvisibleAnswer = answerBlock.innerHTML;

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i].toUpperCase(), letter);
    let newInvisibleAnswer = oldInvisibleAnswer;

    if (answer[i].toUpperCase() === letter) {
      console.log('есть совпадение');

      const firstPart = oldInvisibleAnswer.slice(0, i);
      const secondPart = oldInvisibleAnswer.slice(i + 1);

      newInvisibleAnswer = `${firstPart}${letter}${secondPart}`;

      answerBlock.innerHTML = newInvisibleAnswer;
      console.log(answerBlock, oldInvisibleAnswer, newInvisibleAnswer);
    }
  }
}
