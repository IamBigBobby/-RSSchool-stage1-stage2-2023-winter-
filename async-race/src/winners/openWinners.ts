export default function openWinners(): void {
  console.log("open winners");
  const winnerView = document.querySelector(".winners-page") as HTMLElement;
  winnerView.style.display = "block";
}
