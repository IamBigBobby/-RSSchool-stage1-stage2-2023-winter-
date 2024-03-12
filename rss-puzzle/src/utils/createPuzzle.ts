export class PuzzleGame {
  public container: HTMLElement;
  private rows: number;
  private cols: number;

  constructor(cols: number, container = '.game-container', rows = 10) {
    this.rows = rows;
    this.cols = cols;
    this.container = document.querySelector(container);
  }

  public setupPuzzle(): void {
    if (!this.container) {
      console.error('Container not found');
      return;
    }

    const containerWidth: number = this.container.offsetWidth;
    const containerHeight: number = this.container.offsetHeight;

    console.log(containerHeight, containerWidth);

    const pieceWidth: number = containerWidth / this.cols;
    const pieceHeight: number = containerHeight / this.rows;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const piece: HTMLElement = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.width = `${pieceWidth}px`;
        piece.style.height = `${pieceHeight}px`;
        piece.style.top = `${i * pieceHeight}px`;
        piece.style.left = `${j * pieceWidth}px`;
        piece.innerText = `${i},${j}`;
        this.container.appendChild(piece);
      }
    }
  }
}
