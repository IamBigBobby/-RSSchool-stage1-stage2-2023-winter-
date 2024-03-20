import continueRound from './continueRound';

export let step: number = 0;

export default function checkSentence(textArr: string[][]): void {
  let sentenceLength: number = 0;
  const activeFields = document.querySelectorAll('.collecting-field_active');
  const checkButton = document.querySelector(
    '.check-button',
  ) as HTMLButtonElement;
  const currentSentenceLength = textArr[step].length;

  activeFields.forEach((field) => {
    if (field.querySelector('.puzzle-piece')) {
      sentenceLength += 1;
    }
  });

  if (currentSentenceLength === sentenceLength) {
    checkButton.disabled = false;

    checkButton.addEventListener('click', () => {
      const fieldLine = document.querySelector(
        '.row-container-collecting_active',
      );

      if (fieldLine !== null) {
        const completePuzzles = fieldLine.querySelectorAll('.puzzle-piece');
        const currentSentence = textArr[step];

        let status: boolean = true;

        if (checkButton.textContent === 'check') {
          completePuzzles.forEach((puzzle) => {
            puzzle.classList.remove('puzzle_false');
          });

          const checkArr: string[] = [];
          completePuzzles.forEach((puzzle) => {
            const text = puzzle.textContent?.toString();
            if (text !== undefined) {
              checkArr.push(text);
            }
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

            const completeFields = Array.from(
              document.querySelectorAll('.collecting-field_active'),
            ) as HTMLElement[];

            completeFields.forEach((field) => {
              const word = field.querySelector('.word');
              if (word !== null) {
                word.classList.add('word_open');
              }
            });

            const continueButton = document.querySelector(
              '.continue-button',
            ) as HTMLButtonElement;
            continueButton.disabled = false;
            continueButton.style.display = 'block';
            checkButton.style.display = 'none';
            continueButton.addEventListener('click', continueRound);
          }
        }
      }
    });
    return;
  }
  checkButton.disabled = true;
}

export function setStep(newStep: number): void {
  step = newStep;
}

export function nextStep(): void {
  step += 1;
}
