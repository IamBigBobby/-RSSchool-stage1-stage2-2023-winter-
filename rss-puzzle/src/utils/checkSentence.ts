export let step: number = 0;

export function checkSentence(textArr: string[][]): void {
  let sentenceLength: number = 0;
  const activeFields = document.querySelectorAll('.collecting-field_active');
  const checkButton = document.querySelector(
    '.check-button'
  ) as HTMLButtonElement;
  const currentSentenceLength = textArr[step].length;

  activeFields.forEach((field) => {
    if (field.querySelector('.puzzle-piece')) {
      sentenceLength += 1;
    }
  });

  if (currentSentenceLength === sentenceLength) {
    checkButton.disabled = false;

    checkButton.addEventListener('click', function checkAndUpdate() {
      const fieldLine = document.querySelector(
        '.row-container-collecting_active'
      );
      const completePuzzles = fieldLine.querySelectorAll('.puzzle-piece');
      const currentSentence = textArr[step];

      let status: boolean = true;

      if (checkButton.textContent === 'check') {
        completePuzzles.forEach((puzzle) => {
          puzzle.classList.remove('puzzle_false');
        });

        const checkArr: string[] = [];
        completePuzzles.forEach((puzzle) => {
          const text = puzzle.textContent;
          checkArr.push(text);
        });

        for (let i = 0; i < currentSentence.length; i += 1) {
          if (checkArr[i] !== currentSentence[i]) {
            completePuzzles[i].classList.add('puzzle_false');
          }
        }

        for (let i = 0; i < currentSentence.length; i += 1) {
          if (checkArr[i] !== currentSentence[i]) {
            status = false;
          }
        }
        if (status) {
          fieldLine.classList.add('row-container-collecting_active_complete');
          checkButton.disabled = true;

          const completeFeilds = Array.from(
            document.querySelectorAll('.collecting-field_active')
          ) as HTMLElement[];

          completeFeilds.forEach((field) => {
            const word = field.querySelector('.word');
            word.classList.add('word_open');
            console.log(word);
          });

          const continueButton = document.querySelector(
            '.continue-button'
          ) as HTMLButtonElement;
          continueButton.disabled = false;
          continueButton.style.display = 'block';
          checkButton.style.display = 'none';
          continueButton.addEventListener('click', continueRound);
        }
      }
    });
    return;
  }
  checkButton.disabled = true;
}

function continueRound(): void {
  const continueButton = document.querySelector(
    '.continue-button'
  ) as HTMLButtonElement;
  const checkButton = document.querySelector(
    '.check-button'
  ) as HTMLButtonElement;
  const currentFieldLine = document.querySelector(
    '.row-container-collecting_active'
  );
  const activeFields = document.querySelectorAll('.collecting-field_active');
  const completeRightPuzzles =
    currentFieldLine.querySelectorAll('.puzzle-piece');

  currentFieldLine.classList.remove('row-container-collecting_active_complete');

  completeRightPuzzles.forEach((puzzle) => {
    puzzle.classList.add('puzzle_disable');
  });

  activeFields.forEach((field) => {
    field.classList.remove('collecting-field_active');
  });

  const nextFieldLine = currentFieldLine.nextSibling as HTMLElement;

  currentFieldLine.classList.remove('row-container-collecting_active');

  nextFieldLine.classList.add('row-container-collecting_active');

  const nextFields = Array.from(nextFieldLine.children) as HTMLElement[];

  nextFields.forEach((field) => {
    field.classList.add('collecting-field_active');
  });

  step += 1;

  continueButton.disabled = true;
  continueButton.style.display = 'none';
  checkButton.style.display = 'block';
  nextPuzzle(step);
}

function nextPuzzle(step: number): void {
  const puzzleRow = document.querySelectorAll(
    '.row-container'
  ) as NodeListOf<HTMLElement>;

  const currentRowContainer = document.querySelector('.row-container_active');
  const nextRowContainer = currentRowContainer.nextElementSibling;

  currentRowContainer.classList.remove('row-container_active');
  nextRowContainer.classList.add('row-container_active');

  puzzleRow.forEach((puzzle, index) => {
    if (index === step) {
      puzzle.style.display = 'flex';
    } else {
      puzzle.style.display = 'none';
    }
  });
}

export function setStep(newStep: number): void {
  step = newStep;
}
