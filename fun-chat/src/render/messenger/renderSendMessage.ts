import addElementsToParent from "../../utils/addElementsToParent";

export default function renderSendMessage(message: string) {
  const messengerChatWindow = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;

  const sendedMessageData = [
    {
      tagName: "div",
      classNames: ["messenger__sended-message"],
      textContent: message,
    },
  ];
  addElementsToParent(messengerChatWindow, sendedMessageData);
}
