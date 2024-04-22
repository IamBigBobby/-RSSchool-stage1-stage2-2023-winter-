import client from "../constants/currentClient";
import addEmptyHistory from "./addEmptyHistory";

export default function deleteMessage(id: string) {
  const deletedMessage = document.querySelector(`[id="${id}"]`) as HTMLElement;
  const { parentElement } = deletedMessage as HTMLElement;
  const windowChat = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;
  if (parentElement) {
    parentElement.removeChild(deletedMessage);
    client.deleteMessage(id);
    if (windowChat.childElementCount === 0) {
      addEmptyHistory();
    }
  }
}
