import destroyViewWinners from "./destroyViewWinners";
import paginationWinners from "./paginationWinnersStatus";
import viewWinners from "./viewWinners";

export function moveLeftWinner(): void {
  if (paginationWinners.page === 1) {
    return;
  }
  paginationWinners.page -= 1;
  destroyViewWinners().then(() => {
    viewWinners(paginationWinners.page, paginationWinners.sortBy);
  });
}

export function moveRightWinner(): void {
  paginationWinners.page += 1;
  destroyViewWinners().then(() => {
    viewWinners(paginationWinners.page, paginationWinners.sortBy);
  });
}
