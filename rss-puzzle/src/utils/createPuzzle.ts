export class PuzzleGame {
  public container: HTMLElement;
  private rows: number;
  private cols: number;

  constructor(cols: number, container: string, rows = 10) {
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

// export function setupPuzzle(cols: number, containerSelector: string, rows: number = 10): void {
//     const container: HTMLElement | null = document.querySelector(containerSelector);

//     if (!container) {
//         console.error('Container not found');
//         return;
//     }

//     const containerWidth: number = container.offsetWidth;
//     const containerHeight: number = container.offsetHeight;

//     const pieceWidth: number = containerWidth / cols;
//     const pieceHeight: number = containerHeight / rows;

//     for (let i: number = 0; i < rows; i++) {
//         for (let j: number = 0; j < cols; j++) {
//             const piece: HTMLElement = document.createElement('div');
//             piece.classList.add('puzzle-piece');
//             piece.style.width = `${pieceWidth}px`;
//             piece.style.height = `${pieceHeight}px`;
//             piece.style.top = `${i * pieceHeight}px`;
//             piece.style.left = `${j * pieceWidth}px`;
//             piece.style.backgroundPosition = `-${j * pieceWidth}px -${i * pieceHeight}px`;
//             piece.innerText = `${i},${j}`;
//             container.appendChild(piece);
//         }
//     }
// }
