import { step } from './checkSentence';
import { currentDifficulty } from './difficulty';
import { GetCurrentData } from './getData';
import { currentRound } from './rounds';

export function showTranslation(): void {
  const buttonHintTranslation = document.querySelector(
    '.button-hint-translation'
  );

  buttonHintTranslation.addEventListener('click', function () {
    const translationField = document.querySelector('.translation-field');
    if (buttonHintTranslation.textContent === 'Show translate: off') {
      console.log(currentDifficulty, currentRound, step);

      const newData = new GetCurrentData(currentDifficulty, currentRound);

      console.log(newData.getTranslation(step));

      newData.getTranslation(step).then((translate) => {
        translationField.textContent = translate;
      });
      buttonHintTranslation.textContent = 'Show translate: on';
      return;
    } else if (buttonHintTranslation.textContent === 'Show translate: on') {
      translationField.textContent = '';
      buttonHintTranslation.textContent = 'Show translate: off';
    }
  });
}
