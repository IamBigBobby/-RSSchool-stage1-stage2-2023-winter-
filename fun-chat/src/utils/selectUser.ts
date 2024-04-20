import client from "../constants/currentClient";
import message from "../constants/message";
import destroyWindowChat from "./destroyWindowChat";

export default function selectUser(event: Event) {
  message.text = "";
  message.to = "";

  const allUsers = document.querySelectorAll(".messenger__users-list-element");

  allUsers.forEach((user) => {
    user.classList.remove("messenger__users-list_selected");
  });

  const selectedUser = event.target as HTMLElement;

  selectedUser.classList.add("messenger__users-list_selected");

  const stringSelectedUser = selectedUser.textContent as string;
  message.to = stringSelectedUser;

  destroyWindowChat();

  client.fetchingMessageHistory(stringSelectedUser);

  const messengerInputField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;
  const buttonSendMessenger = document.querySelector(
    ".messenger__chat-send-button",
  ) as HTMLButtonElement;

  messengerInputField.classList.remove("messenger__chat-input_disabled");
  buttonSendMessenger.classList.remove("messenger__chat-send-button_disabled");
}
