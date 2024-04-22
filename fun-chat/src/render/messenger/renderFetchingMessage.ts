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

  if (fetchingMessages.length > 0) {
    const currentUser = sessionStorage.getItem(
      "userData_iambigbobby",
    ) as string;
    const currentUserparsed = JSON.parse(currentUser);

    let messageClasses: string[];
    let nameUser: string;

    fetchingMessages.forEach((message) => {
      if (currentUserparsed.login === message.from) {
        messageClasses = ["messenger__message", "messenger__sended-message"];
        nameUser = message.from;
      } else if (currentUserparsed.login !== message.from) {
        messageClasses = ["messenger__message", "messenger__response-message"];
        nameUser = message.from;
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
          classNames: ["messenger__from-name"],
          textContent: nameUser,
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

      const messengerStatusCreated =
        document.querySelectorAll(".messenger__status");
      const lastMessengerStatus = messengerStatusCreated[
        messengerStatusCreated.length - 1
      ] as HTMLElement;

      const grandparentElement = lastMessengerStatus.parentElement || null;

      let statusDelivered;
      let statusEdited;
      // let statusReaded;

      if (
        message.status.isDelivered === true &&
        grandparentElement?.classList.contains("messenger__sended-message")
      ) {
        statusDelivered = "delivererd";
      } else {
        statusDelivered = "";
      }

      if (message.status.isEdited === true) {
        statusEdited = "edited";
      } else {
        statusEdited = "";
      }

      const messengerStatusContent = [
        {
          tagName: "div",
          classNames: ["messenger__send-satus"],
          textContent: statusDelivered,
        },
        {
          tagName: "div",
          classNames: ["messenger__read-status"],
        },
        {
          tagName: "div",
          classNames: ["messenger__eidt-status"],
          textContent: statusEdited,
        },
      ];

      addElementsToParent(lastMessengerStatus, messengerStatusContent);
    });
    scrollBottom();
  } else {
    console.log("нет истории сообщения");
    const messageData = [
      {
        tagName: "div",
        classNames: ["messenger__empty-history"],
        textContent: "start communication",
      },
    ];
    addElementsToParent(messengerChatWindow, messageData);
  }
}
