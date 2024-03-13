import { div } from '../componets/tagsFarm';

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

    for (let i = 0; i < this.rows; i++) {
      const rowContainer = div('row-container');
      this.container.appendChild(rowContainer.getNode());

      for (let j = 0; j < this.cols[i].length; j++) {
        const piece = div('puzzle-piece');

        const word: string = this.cols[i][j];
        const wordLength: number = word.length;

        // Определение длины "короткого" и "длинного" слова
        const shortWordLength = 5; // Примерное значение, можно настроить
        const longWordLength = 10; // Примерное значение, можно настроить

        // Определение ширины пазла в зависимости от длины слова
        let pieceWidth: number;
        if (wordLength <= shortWordLength) {
          pieceWidth = containerWidth / (this.cols[i].length * 2); // Уменьшаем ширину для коротких слов
        } else if (wordLength >= longWordLength) {
          pieceWidth = containerWidth / (this.cols[i].length / 2); // Увеличиваем ширину для длинных слов
        } else {
          pieceWidth = containerWidth / this.cols[i].length; // Ширина по умолчанию
        }

        const pieceHeight: number = containerHeight / this.rows;

        piece.setStyle('width', `${pieceWidth}px`);
        piece.setStyle('height', `${pieceHeight}px`);
        piece.setStyle(
          'background-image',
          `url(https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${this.img})`
        );

        const backgroundPosX = -(containerWidth / this.cols[i].length) * j;
        const backgroundPosY = -(containerHeight / this.rows) * i;

        piece.setStyle(
          'background-position',
          `${backgroundPosX}px ${backgroundPosY}px`
        );

        piece.setInnerText(`${word}`);

        rowContainer.appendChildren([piece]);
      }
    }
  }
}
