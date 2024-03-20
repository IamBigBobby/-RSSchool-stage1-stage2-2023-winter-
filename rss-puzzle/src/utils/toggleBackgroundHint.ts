export default function showBackground(): void {
  const buttonHintImg = document.querySelector('.button-hint-img');

  if (buttonHintImg) {
    buttonHintImg.addEventListener('click', () => {
      const activeRowPuzzle = document.querySelector(
        '.row-container-collecting_active',
      );
      const activeRowContainerPuzzle = document.querySelector(
        '.row-container_active',
      );

      if (activeRowPuzzle && activeRowContainerPuzzle) {
        const activeFieldPuzzle = Array.from(activeRowPuzzle.children);
        const activeFiledContainer = Array.from(
          activeRowContainerPuzzle.children,
        );

        if (activeFieldPuzzle.length > 0 && activeFiledContainer.length > 0) {
          if (buttonHintImg.textContent === 'Show background: off') {
            activeFieldPuzzle.forEach((field) => {
              const word = field.querySelector('.word');
              if (word) {
                word.classList.add('word_open');
              }
            });

            activeFiledContainer.forEach((field) => {
              const word = field.querySelector('.word');
              if (word) {
                word.classList.add('word_open');
              }
            });
            buttonHintImg.textContent = 'Show background: on';
          } else if (buttonHintImg.textContent === 'Show background: on') {
            activeFieldPuzzle.forEach((field) => {
              const word = field.querySelector('.word');
              if (word) {
                word.classList.remove('word_open');
              }
            });

            activeFiledContainer.forEach((field) => {
              const word = field.querySelector('.word');
              if (word) {
                word.classList.remove('word_open');
              }
            });
            buttonHintImg.textContent = 'Show background: off';
          }
        }
      }
    });
  }
}
