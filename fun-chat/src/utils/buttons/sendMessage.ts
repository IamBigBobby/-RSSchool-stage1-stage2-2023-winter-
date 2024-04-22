import client from "../../constants/currentClient";
import message from "../../constants/message";
import renderSendMessage from "../../render/messenger/renderSendMessage";
import removeEmptyHistory from "../removeEmpptyHistory";
import scrollBottom from "../scrollBottom";

function sendingClick() {
  const inputMessengerField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;

  if (message.text.trim() !== "") {
    const emptyHistory = document.querySelector(
      ".messenger__empty-history",
    ) as HTMLElement;
    if (emptyHistory) {
      removeEmptyHistory();
    }
    renderSendMessage(message.text);
    client.sendingMessage(message.to, message.text);
    inputMessengerField.value = "";
    message.text = "";
    scrollBottom();
  }
}

function sendingEnter(event: KeyboardEvent) {
  const inputMessengerField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;

  const sendMessageButton = document.querySelector(
    ".messenger__chat-send-button",
  ) as HTMLButtonElement;

  const editMessageButton = document.querySelector(
    ".messenger__chat-edit-button",
  ) as HTMLButtonElement;

  if (sendMessageButton) {
    if (
      !sendMessageButton.classList.contains(
        "messenger__chat-send-button_disabled",
      ) &&
      event.key === "Enter" &&
      !editMessageButton.classList.contains(
        "messenger__chat-edit-button_visible",
      )
    ) {
      if (message.text.trim() !== "") {
        const emptyHistory = document.querySelector(
          ".messenger__empty-history",
        ) as HTMLElement;
        if (emptyHistory) {
          removeEmptyHistory();
        }
        client.sendingMessage(message.to, message.text);
        renderSendMessage(message.text);
        inputMessengerField.value = "";
        message.text = "";
        scrollBottom();
      }
    }
  }
}

export default function sendMessage() {
  const sendMessageButton = document.querySelector(
    ".messenger__chat-send-button",
  ) as HTMLButtonElement;

  sendMessageButton.addEventListener("click", sendingClick);
  document.addEventListener("keydown", sendingEnter);
}
