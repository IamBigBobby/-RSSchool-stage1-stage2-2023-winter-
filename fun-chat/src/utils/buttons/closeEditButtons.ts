export default function closeEditButtons() {
  const editMessageButton = document.querySelector(
    ".messenger__chat-edit-button",
  ) as HTMLButtonElement;

  const cancelEditButton = document.querySelector(
    ".messenger__chat-cancel-edit-button",
  ) as HTMLButtonElement;

  editMessageButton.classList.remove("messenger__chat-edit-button_visible");
  cancelEditButton.classList.remove(
    "messenger__chat-cancel-edit-button_visible",
  );
}
