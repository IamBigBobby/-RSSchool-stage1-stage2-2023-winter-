export default function destroyPage() {
  const app = document.querySelector(".app") as HTMLElement;
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
}
