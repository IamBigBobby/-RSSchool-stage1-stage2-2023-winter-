import addElementsToParent from "../../utils/addElementsToParent";
import getCurrentTime from "../../utils/getCurrentTime";

export default function renderSendMessage(message: string) {
  const messengerChatWindow = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;

  const time = new Date();

  const userData = sessionStorage.getItem("userData_iambigbobby") as string;
  const userDataParse = JSON.parse(userData);

  const sendedMessageData = [
    {
      tagName: "div",
      classNames: ["messenger__message", "messenger__sended-message"],
    },
  ];

  addElementsToParent(messengerChatWindow, sendedMessageData);

  const sendedMessages = document.querySelectorAll(".messenger__message");
  const sendedMessageCreated = sendedMessages[
    sendedMessages.length - 1
  ] as HTMLElement;

  const sendedMessageContent = [
    {
      tagName: "div",
      classNames: ["messenger__time"],
      textContent: getCurrentTime(time),
    },
    {
      tagName: "div",
      classNames: ["messenger__from-name"],
      textContent: userDataParse.login,
    },
    {
      tagName: "div",
      classNames: ["messenger__text"],
      textContent: message,
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

  const messengerStatusContent = [
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

  addElementsToParent(lastMessengerStatus, messengerStatusContent);
}
