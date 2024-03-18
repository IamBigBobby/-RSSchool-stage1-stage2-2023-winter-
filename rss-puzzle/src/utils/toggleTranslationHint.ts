export function showTranslation(): void {
  const buttonHintTranslation = document.querySelector(
    '.button-hint-translation'
  );

  buttonHintTranslation.addEventListener('click', function () {
    console.log('click');
  });
}
