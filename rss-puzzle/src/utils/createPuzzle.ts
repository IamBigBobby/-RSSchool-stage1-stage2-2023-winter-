import { div } from '../componets/tagsFarm';

export class PuzzleGame {
  public container: HTMLElement;
  private rows: number;
  private cols: string[][];
  private img: string;

  constructor(
    cols: string[][],
    img: string,
    container = '.puzzle-container',
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

      if (i !== 0) {
        rowContainer.setStyle('visibility', 'hidden');
      }

      for (let j = 0; j < this.cols[i].length; j++) {
        const piece = div('puzzle-piece');

        const word: string = this.cols[i][j];
        const wordLength: number = word.length;

        // const shortWordLength = 5;
        // const longWordLength = 10;
        // variable

        let pieceWidth: number = containerWidth / this.cols[i].length;
        let pieceHeight: number = containerHeight / this.rows;

        // if (wordLength <= shortWordLength) {
        //   pieceWidth = containerWidth / (this.cols[i].length * 2);
        // } else if (wordLength >= longWordLength) {
        //   pieceWidth = containerWidth / (this.cols[i].length / 2);
        // }
        // its a flexible width for piece, it dosent work

        piece.setStyle(
          'background-image',
          `url(https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${this.img})`
        );

        const backgroundPosX = -(pieceWidth * j);
        const backgroundPosY = -(pieceHeight * i);

        piece.setStyle(
          'background-position',
          `${backgroundPosX}px ${backgroundPosY}px`
        );

        piece.setStyle('width', `${pieceWidth}px`);
        piece.setStyle('height', `${pieceHeight}px`);

        piece.setInnerText(`${word}`);

        rowContainer.appendChildren([piece]);
      }

      const rowContainerChildren = Array.from(rowContainer.getChildren());
      const childrenArray = rowContainerChildren.slice();

      for (let i = childrenArray.length - 1; i > 0; i--) {
        const randomNumber = Math.floor(Math.random() * (i + 1));
        const temp = childrenArray[i];
        childrenArray[i] = childrenArray[randomNumber];
        childrenArray[randomNumber] = temp;
      }

      rowContainer.appendChildren(childrenArray);
    }
  }
}
