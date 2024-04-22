import message from "../../constants/message";
import { ResevedMessage } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";
import getCurrentTime from "../../utils/getCurrentTime";
import removeEmptyHistory from "../../utils/removeEmpptyHistory";
import scrollBottom from "../../utils/scrollBottom";

export default function renderResponseMessage(resevedMessage: ResevedMessage) {
  const emptyHistory = document.querySelector(
    ".messenger__empty-history",
  ) as HTMLElement;
  if (emptyHistory) {
    removeEmptyHistory();
  }

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
        attributes: {
          id: resevedMessage.id,
        },
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

    const messengerStatusCreated =
      document.querySelectorAll(".messenger__status");
    const lastMessengerStatus = messengerStatusCreated[
      messengerStatusCreated.length - 1
    ] as HTMLElement;

    const messegeStatusContent = [
      {
        tagName: "div",
        classNames: ["messenger__send-satus"],
      },
      {
        tagName: "div",
        classNames: ["messenger__read-status"],
      },
      {
        tagName: "div",
        classNames: ["messenger__eidt-status"],
      },
    ];

    addElementsToParent(lastMessengerStatus, messegeStatusContent);

    scrollBottom();
  }
}
