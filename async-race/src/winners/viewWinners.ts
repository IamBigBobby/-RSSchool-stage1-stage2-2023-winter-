import paginationPageAmendment from "../pagination/paginationStatus";

export default function viewWinners(): void {
  const winnersPage = document.querySelector(".winners-page");

  const currentPage = document.createElement("div");

  currentPage.classList.add("current-page-winner");
  currentPage.textContent = `Page# ${paginationPageAmendment.page}`;

  winnersPage?.appendChild(currentPage);
}
