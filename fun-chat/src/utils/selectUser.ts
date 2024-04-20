import destroyWindowChat from "./destroyWindowChat";

export default function selectUser(event: Event) {
  console.log(event.target);
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
