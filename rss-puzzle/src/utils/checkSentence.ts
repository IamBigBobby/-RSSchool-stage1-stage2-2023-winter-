export function checkSentence(textArr: string[]): void {
  let sentenceLenght: number = 0;
  const activeFeilds = document.querySelectorAll('.collecting-field_active');
  const button = document.querySelector('.check-button') as HTMLButtonElement;

  activeFeilds.forEach((field) => {
    if (field.children.length > 0) {
      sentenceLenght += 1;
    }
  });

  console.log(sentenceLenght);
  if (textArr.length === sentenceLenght) {
    button.disabled = false;
    return;
  }

  button.disabled = true;
}
