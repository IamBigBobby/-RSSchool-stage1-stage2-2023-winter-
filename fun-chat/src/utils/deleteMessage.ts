import client from "../constants/currentClient";

export default function deleteMessage(id: string) {
  const deletedMessage = document.querySelector(`[id="${id}"]`) as HTMLElement;
  const { parentElement } = deletedMessage as HTMLElement;
  if (parentElement) {
    parentElement.removeChild(deletedMessage);
    client.deleteMessage(id);
  }
}
