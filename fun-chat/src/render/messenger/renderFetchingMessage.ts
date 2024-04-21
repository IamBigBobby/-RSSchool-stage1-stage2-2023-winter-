import { ResevedMessage } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";
import getCurrentTime from "../../utils/getCurrentTime";
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
    console.log(message.id);
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
        attributes: {
          id: message.id,
        },
      },
    ];
    addElementsToParent(messengerChatWindow, messageData);

    const messages = document.querySelectorAll(".messenger__message");
    const lastMessage = messages[messages.length - 1] as HTMLElement;
    const date = new Date(message.datetime);

    const sendedMessageContent = [
      {
        tagName: "div",
        classNames: ["messenger__time"],
        textContent: getCurrentTime(date),
      },
      {
        tagName: "div",
        classNames: ["messenger__text"],
        textContent: message.text,
      },
      {
        tagName: "div",
        classNames: ["messenger__status"],
      },
    ];

    addElementsToParent(lastMessage, sendedMessageContent);
  });
  scrollBottom();
}
