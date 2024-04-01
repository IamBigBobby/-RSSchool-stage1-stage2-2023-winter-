import { stepLeft, stepRight } from "./movePagination";

export default function createButtonsPagination(): void {
  const { body } = document;
  const leftPagination = document.createElement("button");
  const rightPagination = document.createElement("button");

  leftPagination.classList.add("button-left-pagination");
  rightPagination.classList.add("button-right-pagiantion");
  leftPagination.textContent = "PREV";
  rightPagination.textContent = "NEXT";

  body.appendChild(leftPagination);
  body.appendChild(rightPagination);

  const createdLeftPagination = document.querySelector(
    ".button-left-pagination",
  );
  const createdRightPagination = document.querySelector(
    ".button-right-pagiantion",
  );

  createdLeftPagination?.addEventListener("click", stepLeft);
  createdRightPagination?.addEventListener("click", stepRight);
}
