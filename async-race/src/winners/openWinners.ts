export default function openWinners(): void {
  console.log("open winners");
  const winnerView = document.querySelector(".winners-page") as HTMLElement;
  const inputUpdateContainer = document.querySelector(
    ".input-update-container",
  ) as HTMLElement;
  const inputCreateContainer = document.querySelector(
    ".input-create-container",
  ) as HTMLElement;
  const raceButton = document.querySelector(
    ".race-view-button",
  ) as HTMLButtonElement;
  const winnersButton = document.querySelector(
    ".winner-view-button",
  ) as HTMLButtonElement;
  const generateButton = document.querySelector(
    ".button-generate-cars",
  ) as HTMLButtonElement;
  const buttonLeftPagination = document.querySelector(
    ".button-left-pagination",
  ) as HTMLButtonElement;
  const buttonRightPagination = document.querySelector(
    ".button-right-pagiantion",
  ) as HTMLButtonElement;

  winnerView.style.display = "block";
  inputUpdateContainer.style.display = "none";
  inputCreateContainer.style.display = "none";
  raceButton.style.display = "block";
  winnersButton.style.display = "none";
  generateButton.style.display = "none";
  buttonLeftPagination.style.display = "none";
  buttonRightPagination.style.display = "none";
}
