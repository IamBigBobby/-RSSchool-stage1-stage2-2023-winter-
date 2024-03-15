export function checkSentence(textArr: string[]): void {
  let sentenceLenght: number = 0;
  const activeFeilds = document.querySelectorAll('.collecting-field_active');
  activeFeilds.forEach((field) => {
    if (field.children.length > 0) {
      sentenceLenght += 1;
    }
  });

  if (textArr.length === sentenceLenght) {
    console.log('yes');
  }
}
