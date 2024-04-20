import message from "../constants/message";
import destroyWindowChat from "./destroyWindowChat";

export default function selectUser(event: Event) {
  message.text = "";
  message.to = "";

  const selectedUser = event.target as HTMLElement;
  const stringSelectedUser = selectedUser.textContent as string;
  message.to = stringSelectedUser;

  destroyWindowChat();

  const messengerInputField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;
  const buttonSendMessenger = document.querySelector(
    ".messenger__chat-send-button",
  ) as HTMLButtonElement;

  messengerInputField.classList.remove("messenger__chat-input_disabled");
  buttonSendMessenger.classList.remove("messenger__chat-send-button_disabled");
}
