import { step } from './checkSentence';
import { currentDifficulty } from './difficulty';
import { GetCurrentData } from './getData';
import { currentRound } from './rounds';

export default function showTranslation(): void {
  const buttonHintTranslation: HTMLButtonElement | null =
    document.querySelector('.button-hint-translation') as HTMLButtonElement;

  if (buttonHintTranslation) {
    buttonHintTranslation.addEventListener('click', () => {
      const translationField: HTMLElement | null =
        document.querySelector('.translation-field');
      if (buttonHintTranslation.textContent === 'Show translate: off') {
        const newData = new GetCurrentData(currentDifficulty, currentRound);

        newData.getTranslation(step).then((translate) => {
          if (translationField) {
            translationField.textContent = translate;
          }
        });
        buttonHintTranslation.textContent = 'Show translate: on';
      } else if (buttonHintTranslation.textContent === 'Show translate: on') {
        if (translationField) {
          translationField.textContent = '';
        }
        buttonHintTranslation.textContent = 'Show translate: off';
      }
    });
  }
}
