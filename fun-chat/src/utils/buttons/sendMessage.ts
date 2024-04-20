import client from "../../constants/currentClient";
import message from "../../constants/message";
import renderSendMessage from "../../render/messenger/renderSendMessage";

export default function sendMessage() {
  const sendMessageButton = document.querySelector(
    ".messenger__chat-send-button",
  ) as HTMLButtonElement;
  const inputMessengerField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;

  sendMessageButton.addEventListener("click", () => {
    client.sendingMessage(message.to, message.text);
    renderSendMessage(message.text);
    inputMessengerField.value = "";
    message.text = "";
  });
}
