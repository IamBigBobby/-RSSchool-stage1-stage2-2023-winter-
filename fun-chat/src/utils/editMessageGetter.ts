export default function editMessageGetter(id: string, text: string) {
  const message = document.querySelector(`[id="${id}"]`) as HTMLElement;
  const messageStatusEdit = message.querySelector(
    ".messenger__eidt-status",
  ) as HTMLElement;
  const messageText = document.querySelector(".messenger__text") as HTMLElement;

  messageStatusEdit.textContent = "edited";
  messageText.textContent = text;
}
