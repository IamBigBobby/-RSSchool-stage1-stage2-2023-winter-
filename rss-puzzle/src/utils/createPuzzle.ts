export class PuzzleGame {
  public container: HTMLElement;
  private rows: number;
  private cols: string[][];
  private img: string;

  constructor(
    cols: string[][],
    img: string,
    container = '.game-container',
    rows = 10
  ) {
    this.rows = rows;
    this.cols = cols;
    this.container = document.querySelector(container);
    this.img = img;
  }

  public setupPuzzle(): void {
    if (!this.container) {
      console.error('setupPuzzle, dont have any container');
      return;
    }

    const containerWidth: number = this.container.offsetWidth;
    const containerHeight: number = this.container.offsetHeight;

    const pieceHeight: number = containerHeight / this.rows;

    for (let i = 0; i < this.rows; i++) {
      const rowContainer: HTMLElement = document.createElement('div');
      rowContainer.classList.add('row-container');
      this.container.appendChild(rowContainer);

      for (let j = 0; j < this.cols[i].length; j++) {
        const word: string = this.cols[i][j];
        const wordLength: number = word.length;
        let pieceWidth: number = containerWidth / this.cols[i].length;

        const piece: HTMLElement = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.width = `${pieceWidth}px`;
        piece.style.height = `${pieceHeight}px`;
        piece.style.top = `${i * pieceHeight}px`;
        piece.style.left = `${j * pieceWidth}px`;
        piece.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${this.img})`;
        piece.style.backgroundSize = `${containerWidth}px ${containerHeight}px`;
        piece.style.backgroundPosition = `-${j * pieceWidth}px -${i * pieceHeight}px`;
        piece.innerText = `${word}`;

        rowContainer.appendChild(piece);
      }
    }
  }
}
