import { div } from '../componets/tagsFarm';

export default class PuzzleGame {
  public container: HTMLElement;

  private rows: number;

  private cols: string[][];

  private img: string;

  constructor(
    cols: string[][],
    img: string,
    container = '.puzzle-container',
    rows = 10,
  ) {
    this.rows = rows;
    this.cols = cols;
    this.container = document.querySelector(container)!;
    this.img = img;
  }

  public setupPuzzle(): void {
    const containerWidth: number = this.container.offsetWidth;
    const containerHeight: number = this.container.offsetHeight;

    for (let i = 0; i < this.rows; i += 1) {
      const rowContainer = div('row-container');
      this.container.appendChild(rowContainer.getNode());

      if (i === 0) {
        rowContainer.addClass('row-container_active');
      }

      if (i !== 0) {
        rowContainer.setStyle('display', 'none');
      }

      for (let j = 0; j < this.cols[i].length; j += 1) {
        const piece = div('puzzle-piece');

        const word: string = this.cols[i][j];

        const pieceWidth: number = containerWidth / this.cols[i].length;
        const pieceHeight: number = containerHeight / this.rows;

        piece.setStyle(
          'background-image',
          `url(https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${this.img})`,
        );

        const backgroundPosX = -(pieceWidth * j);
        const backgroundPosY = -(pieceHeight * i);

        piece.setStyle(
          'background-position',
          `${backgroundPosX}px ${backgroundPosY}px`,
        );

        piece.setStyle('width', `${pieceWidth}px`);
        piece.setStyle('height', `${pieceHeight}px`);

        const textWord = div('word');
        textWord.setInnerText(`${word}`);

        piece.appendChildren([textWord]);

        rowContainer.appendChildren([piece]);
      }

      const rowContainerChildren = Array.from(rowContainer.getChildren());
      const childrenArray = rowContainerChildren.slice();

      for (let k = childrenArray.length - 1; k > 0; k -= 1) {
        const randomNumber = Math.floor(Math.random() * (k + 1));
        const temp = childrenArray[k];
        childrenArray[k] = childrenArray[randomNumber];
        childrenArray[randomNumber] = temp;
      }

      rowContainer.appendChildren(childrenArray);
    }
  }
}
