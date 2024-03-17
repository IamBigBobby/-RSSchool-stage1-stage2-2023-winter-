export function showBackground(): void {
  const buttonHintImg = document.querySelector('.button-hint-img');

  buttonHintImg.addEventListener('click', function () {
    console.log('click');
    if (buttonHintImg.textContent === 'Show background: off') {
      const activeRowPuzzle = document.querySelector(
        '.row-container-collecting_active'
      );
      const activeRowContainerPuzzle = document.querySelector(
        '.row-container_active'
      );

      const activeFieldPuzzle = Array.from(activeRowPuzzle.children);
      const activeFiledContainer = Array.from(
        activeRowContainerPuzzle.children
      );

      activeFieldPuzzle.forEach((field) => {
        const word = field.querySelector('.word');
        if (word) {
          console.log(word);
          word.classList.add('word_open');
        }
      });

      activeFiledContainer.forEach((field) => {
        const word = field.querySelector('.word');
        if (word) {
          console.log(word);
          word.classList.add('word_open');
        }
      });
      buttonHintImg.textContent = 'Show background: on';
      return;
    } else if (buttonHintImg.textContent === 'Show background: on') {
      const activeRowPuzzle = document.querySelector(
        '.row-container-collecting_active'
      );
      const activeRowContainerPuzzle = document.querySelector(
        '.row-container_active'
      );

      const activeFieldPuzzle = Array.from(activeRowPuzzle.children);
      const activeFiledContainer = Array.from(
        activeRowContainerPuzzle.children
      );

      activeFieldPuzzle.forEach((field) => {
        const word = field.querySelector('.word');
        if (word) {
          // console.log(word);
          word.classList.remove('word_open');
        }
      });

      activeFiledContainer.forEach((field) => {
        const word = field.querySelector('.word');
        if (word) {
          // console.log(word)
          word.classList.remove('word_open');
        }
      });
      buttonHintImg.textContent = 'Show background: off';
      return;
    }
  });
}
