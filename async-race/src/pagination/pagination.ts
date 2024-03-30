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
}
