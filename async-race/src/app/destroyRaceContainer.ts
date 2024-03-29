export default function destroyRaceContainer(): Promise<void> {
  return new Promise<void>((resolve) => {
    const main = document.querySelector(".main") as HTMLElement;
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    resolve();
  });
}
