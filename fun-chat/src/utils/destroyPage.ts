export default function destroyPage() {
  const { body } = document;
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}
