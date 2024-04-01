export default function closeWinners(): void {
  console.log("close winners");
  const winnerView = document.querySelector(".winners-page") as HTMLElement;
  const raceViewButton = document.querySelector(
    ".race-view-button",
  ) as HTMLButtonElement;
  const inputUpdateContainer = document.querySelector(
    ".input-update-container",
  ) as HTMLElement;
  const inputCreateContainer = document.querySelector(
    ".input-create-container",
  ) as HTMLElement;
  const winnersButton = document.querySelector(
    ".winner-view-button",
  ) as HTMLButtonElement;
  const buttonLeftPagination = document.querySelector(
    ".button-left-pagination",
  ) as HTMLButtonElement;
  const buttonRightPagination = document.querySelector(
    ".button-right-pagiantion",
  ) as HTMLButtonElement;
  winnerView.style.display = "none";
  inputUpdateContainer.style.display = "flex";
  inputCreateContainer.style.display = "flex";
  raceViewButton.style.display = "none";
  winnersButton.style.display = "block";
  buttonLeftPagination.style.display = "inline-block";
  buttonRightPagination.style.display = "inline-block";
}
