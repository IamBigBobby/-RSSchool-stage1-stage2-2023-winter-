export default function scrollBottom() {
  const chatWindow = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
