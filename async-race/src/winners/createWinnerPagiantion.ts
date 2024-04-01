import { moveLeftWinner, moveRightWinner } from "./moveButtonPagination";

export default function createWinnerPagination(): void {
  const currentPageWinner = document.querySelector(".winners-page");
  const leftPaginationWinner = document.createElement("button");
  const rightPagiantionWinner = document.createElement("button");
  leftPaginationWinner.classList.add("left-winner-pagiantion");
  rightPagiantionWinner.classList.add("right-winner-pagiantion");
  leftPaginationWinner.textContent = "PREV";
  rightPagiantionWinner.textContent = "RIGHT";
  currentPageWinner?.appendChild(leftPaginationWinner);
  currentPageWinner?.appendChild(rightPagiantionWinner);

  leftPaginationWinner.addEventListener("click", moveLeftWinner);
  rightPagiantionWinner.addEventListener("click", moveRightWinner);
}
