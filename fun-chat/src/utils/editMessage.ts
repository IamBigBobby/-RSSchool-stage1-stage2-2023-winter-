import messageId from "../constants/messageId";
import closeEditButtons from "./buttons/closeEditButtons";

export default function editMessage() {
  const editMessageButton = document.querySelector(
    ".messenger__chat-edit-button",
  ) as HTMLButtonElement;

  const inputField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;

  editMessageButton.addEventListener("click", () => {
    const changedMessage = document.querySelector(
      `[id="${messageId.id}"]`,
    ) as HTMLElement;
    const statusEdited = changedMessage.querySelector(
      ".messenger__eidt-status",
    ) as HTMLElement;
    const textContentMessage = document.querySelector(
      ".messenger__text",
    ) as HTMLElement;

    textContentMessage.textContent = inputField.value;
    statusEdited.textContent = "edited";
    inputField.value = "";
    closeEditButtons();
  });
}
