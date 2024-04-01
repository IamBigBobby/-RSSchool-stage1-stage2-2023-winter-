export default function destroyViewWinners(): Promise<void> {
  return new Promise<void>((resolve) => {
    const currentPageWinners = document.querySelector(
      ".current-page-winner",
    ) as HTMLElement;
    while (currentPageWinners.firstChild) {
      currentPageWinners.removeChild(currentPageWinners.firstChild);
    }
    resolve();
  });
}
