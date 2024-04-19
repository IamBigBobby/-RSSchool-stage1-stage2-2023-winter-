export default function destroyPage(): void {
  const app = document.querySelector(".app") as HTMLElement;
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
}
