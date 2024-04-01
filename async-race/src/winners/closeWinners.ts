export default function closeWinners(): void {
  console.log("close winners");
  const winnerView = document.querySelector(".winners-page") as HTMLElement;
  winnerView.style.display = "none";
}
