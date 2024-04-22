import messageId from "../constants/messageId";

function editMessageInput(message: string) {
  const editButton = document.querySelector(
    ".messenger__chat-edit-button",
  ) as HTMLButtonElement;
  const cancelEditButton = document.querySelector(
    ".messenger__chat-cancel-edit-button",
  ) as HTMLButtonElement;
  const sendMessageButton = document.querySelector(
    ".messenger__chat-send-button",
  ) as HTMLButtonElement;
  const inputField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;

  editButton.classList.add("messenger__chat-edit-button_visible");
  cancelEditButton.classList.add("messenger__chat-cancel-edit-button_visible");
  sendMessageButton.classList.add("messenger__chat-send-button_hidden");

  inputField.value = message;
}

export default function selectEditMenu() {
  const editButton = document.querySelector(".edit-menu__edit") as HTMLElement;
  //   const deleteButton = document.querySelector(".edit-menu__delete") as HTMLElement;
  editButton.addEventListener("click", (event) => {
    const currentMessage = event.target as HTMLElement;
    if (currentMessage.classList.contains("edit-menu__edit")) {
      const textMessage = messageId.text;
      editMessageInput(textMessage);
    }
  });
}
