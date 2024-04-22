export default function deleteGetMessage(id: string) {
  const deletedMessage = document.querySelector(`[id="${id}"]`) as HTMLElement;
  const { parentElement } = deletedMessage as HTMLElement;
  if (parentElement) {
    parentElement.removeChild(deletedMessage);
  }
}
