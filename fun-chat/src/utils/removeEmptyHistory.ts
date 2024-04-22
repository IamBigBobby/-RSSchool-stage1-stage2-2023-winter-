export default function removeEmptyHistory() {
  const emptyHistory = document.querySelector(
    ".messenger__empty-history",
  ) as HTMLElement;
  const parentEmptyHistory = emptyHistory.parentNode;

  if (parentEmptyHistory) {
    parentEmptyHistory.removeChild(emptyHistory);
  }
}
