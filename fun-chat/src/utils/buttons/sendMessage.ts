import client from "../../constants/currentClient";
import message from "../../constants/message";
import renderSendMessage from "../../render/messenger/renderSendMessage";
import scrollBottom from "../scrollBottom";

function sendingClick() {
  const inputMessengerField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;

  if (message.text.trim() !== "") {
    client.sendingMessage(message.to, message.text);
    renderSendMessage(message.text);
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

  if (sendMessageButton) {
    if (
      !sendMessageButton.classList.contains(
        "messenger__chat-send-button_disabled",
      ) &&
      event.key === "Enter"
    ) {
      if (message.text.trim() !== "") {
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

// document.addEventListener("keydown", (event) => {
//   const logInButton = document.querySelector(
//     ".log-in-button",
//   ) as HTMLButtonElement;
//   if (logInButton) {
//     if (
//       !logInButton.classList.contains("log-in-button_disabled") &&
//       event.key === "Enter"
//     ) {
//       console.log("log-in");
//       event.preventDefault();
//       getUser();
//     }
//   }
// });
