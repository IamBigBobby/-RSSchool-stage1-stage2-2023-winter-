export function checkSentence(textArr: string[]): void {
  let sentenceLenght: number = 0;
  const activeFeilds = document.querySelectorAll('.collecting-field_active');
  const button = document.querySelector('.check-button') as HTMLButtonElement;

  activeFeilds.forEach((field) => {
    if (field.children.length > 0) {
      sentenceLenght += 1;
    }
  });

  if (textArr.length === sentenceLenght) {
    button.disabled = false;

    let status: boolean = true;

    button.addEventListener('click', function () {
      console.log(textArr);
      const fieldLine = document.querySelector(
        '.row-container-collecting_active'
      );
      const completePuzzles = fieldLine.querySelectorAll('.puzzle-piece');
      const checkArr: string[] = [];
      completePuzzles.forEach((puzzle) => {
        const text = puzzle.textContent;
        checkArr.push(text);
      });
      console.log(checkArr);
      for (let i = 0; i < textArr.length; i += 1) {
        if (checkArr[i] !== textArr[i]) {
          status = false;
        }
      }

      console.log(status);
    });

    return;
  }

  button.disabled = true;
}
