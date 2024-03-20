export default function destroyPage(): void {
  const { body } = document;

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}
