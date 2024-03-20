// eslint-disable-next-line import/extensions
import { div } from '../componets/tagsFarm';

export default class CollectingField {
  public container: HTMLElement | null;

  private rows: number;

  private cols: string[][];

  constructor(
    cols: string[][],
    container = '.collecting-container',
    rows = 10,
  ) {
    this.rows = rows;
    this.cols = cols;
    this.container = document.querySelector(container);
  }

  public setupCollectingField(): void {
    if (!this.container) {
      throw Error;
    }

    const containerWidth: number = this.container.offsetWidth;
    const containerHeight: number = this.container.offsetHeight;

    for (let i = 0; i < this.rows; i += 1) {
      const rowContainer =
        i === 0
          ? div('row-container-collecting row-container-collecting_active')
          : div('row-container-collecting');
      this.container.appendChild(rowContainer.getNode());

      for (let j = 0; j < this.cols[i].length; j += 1) {
        const piece =
          i === 0
            ? div('collecting-field collecting-field_active')
            : div('collecting-field');

        const pieceWidth: number = containerWidth / this.cols[i].length;
        const pieceHeight: number = containerHeight / this.rows;

        piece.setStyle('width', `${pieceWidth}px`);
        piece.setStyle('height', `${pieceHeight}px`);

        rowContainer.appendChildren([piece]);
      }
    }
  }
}
