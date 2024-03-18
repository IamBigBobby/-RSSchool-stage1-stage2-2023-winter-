export function destroyPage(): void {
  const body = document.body;

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}
