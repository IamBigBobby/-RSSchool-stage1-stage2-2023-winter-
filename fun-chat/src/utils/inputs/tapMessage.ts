import message from "../../constants/message";

export default function tapMessage() {
  const inputMessengerField = document.querySelector(
    ".messenger__chat-input",
  ) as HTMLInputElement;

  inputMessengerField.addEventListener("input", () => {
    message.text = inputMessengerField.value;
  });
}
