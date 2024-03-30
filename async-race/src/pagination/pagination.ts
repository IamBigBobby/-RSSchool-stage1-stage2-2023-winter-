export const paginationPageAmendment: { page: number; amendment: number } = {
  page: 1,
  amendment: 0,
};

function stepLeft(): void {
  paginationPageAmendment.page -= 1;
  paginationPageAmendment.amendment -= 7;
  console.log(paginationPageAmendment.page, paginationPageAmendment.amendment);
}

function stepRight(): void {
  paginationPageAmendment.page += 1;
  paginationPageAmendment.amendment += 7;
  console.log(paginationPageAmendment.page, paginationPageAmendment.amendment);
}

export default function createButtonsPagination(): void {
  const { body } = document;
  const leftPagination = document.createElement("button");
  const rightPagination = document.createElement("button");

  leftPagination.classList.add("button-left-pagination");
  rightPagination.classList.add("button-right-pagiantion");
  leftPagination.textContent = "LEFT";
  rightPagination.textContent = "RIGHT";

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
