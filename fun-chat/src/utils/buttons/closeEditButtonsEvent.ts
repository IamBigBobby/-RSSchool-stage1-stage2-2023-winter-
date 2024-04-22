import closeEditButtons from "./closeEditButtons";

export default function closeEditButtonsEvent() {
  const cancelEditButton = document.querySelector(
    ".messenger__chat-cancel-edit-button",
  ) as HTMLElement;

  cancelEditButton.addEventListener("click", () => {
    closeEditButtons();
  });
}
