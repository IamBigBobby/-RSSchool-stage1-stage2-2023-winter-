export default function destroyWindowChat(): void {
  const messengerWindowChat = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;

  while (messengerWindowChat.firstChild) {
    messengerWindowChat.removeChild(messengerWindowChat.firstChild);
  }
}
