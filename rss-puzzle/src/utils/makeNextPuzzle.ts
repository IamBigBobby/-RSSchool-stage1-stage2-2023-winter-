export default function nextPuzzle(step: number): void {
  const puzzleRow = document.querySelectorAll(
    '.row-container',
  ) as NodeListOf<HTMLElement>;

  const currentRowContainer = document.querySelector('.row-container_active');
  const nextRowContainer = currentRowContainer
    ? currentRowContainer.nextElementSibling
    : null;

  if (currentRowContainer && nextRowContainer) {
    currentRowContainer.classList.remove('row-container_active');
    nextRowContainer.classList.add('row-container_active');

    puzzleRow.forEach((element, index) => {
      const currentElement = element;
      if (index === step) {
        currentElement.style.display = 'flex';
      } else {
        currentElement.style.display = 'none';
      }
    });
  }
}
