import { ResevedMessage } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";
import scrollBottom from "../../utils/scrollBottom";

export default function renderFetchingMessage(
  fetchingMessages: ResevedMessage[],
) {
  const messengerChatWindow = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;
  const currentUser = sessionStorage.getItem("userData_iambigbobby") as string;
  const currentUserparsed = JSON.parse(currentUser);
  fetchingMessages.forEach((message) => {
    let messageClasses: string[];
    if (currentUserparsed.login === message.from) {
      messageClasses = ["messenger__message", "messenger__sended-message"];
    } else {
      messageClasses = ["messenger__message", "messenger__response-message"];
    }
    const messageData = [
      {
        tagName: "div",
        classNames: messageClasses,
        textContent: message.text,
      },
    ];
    addElementsToParent(messengerChatWindow, messageData);
  });
  scrollBottom();
}
