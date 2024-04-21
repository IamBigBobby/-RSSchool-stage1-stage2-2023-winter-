import message from "../../constants/message";
import { ResevedMessage } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";
import getCurrentTime from "../../utils/getCurrentTime";
import scrollBottom from "../../utils/scrollBottom";

export default function renderResponseMessage(resevedMessage: ResevedMessage) {
  const timestamp = resevedMessage.datetime;
  const date = new Date(timestamp);

  const messengerChatWindow = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;
  const userGetter = sessionStorage.getItem("userData_iambigbobby") as string;
  const userGetterParsed = JSON.parse(userGetter);
  if (
    resevedMessage.to === userGetterParsed.login &&
    message.to === resevedMessage.from
  ) {
    const resevedMessageData = [
      {
        tagName: "div",
        classNames: ["messenger__message", "messenger__response-message"],
      },
    ];
    addElementsToParent(messengerChatWindow, resevedMessageData);

    const sendedMessages = document.querySelectorAll(".messenger__message");
    const sendedMessageCreated = sendedMessages[
      sendedMessages.length - 1
    ] as HTMLElement;

    const sendedMessageContent = [
      {
        tagName: "div",
        classNames: ["messenger__time"],
        textContent: getCurrentTime(date),
      },
      {
        tagName: "div",
        classNames: ["messenger__text"],
        textContent: resevedMessage.text,
      },
      {
        tagName: "div",
        classNames: ["messenger__status"],
      },
    ];

    addElementsToParent(sendedMessageCreated, sendedMessageContent);

    const messengerStatusCreated = document.querySelector(
      ".messenger__status",
    ) as HTMLElement;

    const messengerStatusContent = [
      {
        tagName: "div",
        classNames: ["messenger__send-satus"],
      },
    ];

    addElementsToParent(messengerStatusCreated, messengerStatusContent);
    scrollBottom();
  }
}
