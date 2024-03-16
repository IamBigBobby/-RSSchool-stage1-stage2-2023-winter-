let round: number = 0;

export function checkSentence(textArr: string[][]): void {
  let sentenceLenght: number = 0;
  const activeFeilds = document.querySelectorAll('.collecting-field_active');
  const button = document.querySelector('.check-button') as HTMLButtonElement;
  const currentSentense = textArr[round];

  activeFeilds.forEach((field) => {
    if (field.children.length > 0) {
      sentenceLenght += 1;
    }
  });

  if (currentSentense.length === sentenceLenght) {
    button.disabled = false;

    let status: boolean = true;

    button.addEventListener('click', function () {
      const fieldLine = document.querySelector(
        '.row-container-collecting_active'
      );
      const completePuzzles = fieldLine.querySelectorAll('.puzzle-piece');

      completePuzzles.forEach((puzzle) => {
        puzzle.classList.remove('puzzle_false');
      });

      const checkArr: string[] = [];
      completePuzzles.forEach((puzzle) => {
        const text = puzzle.textContent;
        checkArr.push(text);
      });
      for (let i = 0; i < currentSentense.length; i += 1) {
        if (checkArr[i] !== currentSentense[i]) {
          status = false;
          completePuzzles[i].classList.add('puzzle_false');
        }
      }

      if (status === true) {
        button.textContent = 'continue';
      }

      button.addEventListener('click', function () {
        if (status === true) {
          fieldLine.classList.add('row-container-collecting_active_complete');
          setTimeout(function () {
            fieldLine.classList.remove(
              'row-container-collecting_active_complete'
            );
          }, 2000);
          completePuzzles.forEach((puzzle) => {
            puzzle.classList.add('puzzle_disable');
          });

          const childrenFieldLine = fieldLine.children;
          for (let i = 0; i < childrenFieldLine.length; i += 1) {
            childrenFieldLine[i].classList.remove('collecting-field_active');
          }

          fieldLine.classList.remove('row-container-collecting_active');
          const nextFieldLine = fieldLine.nextSibling as HTMLElement;
          nextFieldLine.classList.add('row-container-collecting_active');

          const nextActiveFieldLine = document.querySelector(
            '.row-container-collecting_active'
          );
          const nextActiveChildrenFields = nextActiveFieldLine.children;

          for (let i = 0; i < nextActiveChildrenFields.length; i += 1) {
            nextActiveChildrenFields[i].classList.add(
              'collecting-field_active'
            );
          }
          button.disabled = true;
          button.textContent = 'check';
          round += 1;
          console.log(round);
          console.log(textArr[round]);
        }
      });
    });

    return;
  }

  button.disabled = true;
}
